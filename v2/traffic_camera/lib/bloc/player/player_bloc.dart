import 'dart:async';

import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:traffic_camera/entities/camera/camera.dart';
import 'package:traffic_camera/repositories/player_repository.dart';
import 'package:traffic_camera/services/camera_service.dart';

part 'player_event.dart';
part 'player_state.dart';

class PlayerBloc extends Bloc<PlayerEvent, PlayerState> {
  late final StreamSubscription<int> _ticker;
  late final Stream<int> _stream;
  late final PlayerRepository _repo;
  int _counter = 0;

  PlayerBloc() : super(const PlayerStopped()) {
    _repo = PlayerRepository();
    _stream = Stream.periodic(Durations.extralong4, _streamCompute);
    _ticker = _stream.listen(_onTick);
    _ticker.pause();

    on<PlayerOnToggle>(_toggle);
    on<_PlayerOnUpdate>(_updated);
  }

  _toggle(PlayerOnToggle event, Emitter<PlayerState> emit) async {
    if (_ticker.isPaused == false) {
      _ticker.pause();
    }

    if (_repo.camera == event.camera) {
      _repo.camera = null;
      _repo.t = null;
      _counter = 0;

      await _repo.updateCameraImage();
      emit(const PlayerStopped());

      return;
    }

    _repo.camera = event.camera;
    _repo.t = 0;

    await _repo.updateCameraImage();
    emit(PlayerPlaying());

    _counter = 1;
    _ticker.resume();
  }

  _updated(_PlayerOnUpdate event, Emitter<PlayerState> emit) async {
    if (_repo.camera == null) return;

    _repo.t = event.t;
    emit(PlayerPlaying());

    if (event.t != 0) return;

    await _repo.updateCameraImage();
    if (_repo.camera == null) return;

    emit(PlayerPlaying());
  }

  _onTick(int v) {
    add(_PlayerOnUpdate(t: v));
  }

  int _streamCompute(int v) {
    final result = _counter;

    _counter++;

    if (_counter > 5) {
      _counter = 0;
    }

    return result;
  }
}
