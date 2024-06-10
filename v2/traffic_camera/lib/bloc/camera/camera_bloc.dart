import 'package:equatable/equatable.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:meta/meta.dart';
import 'package:traffic_camera/components/common/selection/selection.dart';
import 'package:traffic_camera/entities/camera/camera.dart';
import 'package:traffic_camera/repositories/camera_repository.dart';

part 'camera_event.dart';
part 'camera_state.dart';

class CameraBloc extends Bloc<CameraEvent, CameraState> {
  CameraBloc() : super(const CameraLoading()) {
    on<CameraOnStarted>(_started);
    on<CameraOnDistrictSelected>(_districtSelected);
    on<CameraOnStreetSelected>(_streetSelected);
  }

  final repo = CameraRepository();

  _started(CameraOnStarted event, Emitter<CameraState> emit) async {
    emit(const CameraLoading());

    await repo.ensureInitialized();

    emit(CameraLoaded());
  }

  _districtSelected(CameraOnDistrictSelected event, Emitter<CameraState> emit) async {
    emit(const CameraLoading());

    await repo.updateDistrictFilter(event.selected);
    repo.splitCameras();

    emit(CameraLoaded());
  }

  _streetSelected(CameraOnStreetSelected event, Emitter<CameraState> emit) async {
    emit(const CameraLoading());

    await repo.updateStreetFilter(event.selected);
    repo.splitCameras();

    emit(CameraLoaded());
  }
}
