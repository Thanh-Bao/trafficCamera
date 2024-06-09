part of 'camera_bloc.dart';

@immutable
sealed class CameraState extends Equatable {
  const CameraState();

  @override
  List<Object?> get props => [];
}

final class CameraLoading extends CameraState {
  const CameraLoading();
}

final class CameraLoaded extends CameraState {
  CameraLoaded() : super() {
    final repo = CameraRepository();
    cameras = repo.cameras!;
  }

  late final List<Camera> cameras;

  @override
  List<Object?> get props => [cameras];
}
