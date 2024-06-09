import 'package:equatable/equatable.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:meta/meta.dart';
import 'package:traffic_camera/entities/camera/camera.dart';
import 'package:traffic_camera/repositories/camera_repository.dart';

part 'camera_event.dart';
part 'camera_state.dart';

class CameraBloc extends Bloc<CameraEvent, CameraState> {
  CameraBloc() : super(const CameraLoading()) {
    on<CameraOnStarted>(_started);
  }

  final repo = CameraRepository();

  _started(CameraOnStarted event, Emitter<CameraState> emitter) async {
    emitter(const CameraLoading());

    await repo.ensureInitialized();

    emitter(CameraLoaded());
  }
}
