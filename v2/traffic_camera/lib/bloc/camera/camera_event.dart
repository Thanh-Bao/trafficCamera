part of 'camera_bloc.dart';

@immutable
sealed class CameraEvent extends Equatable {
  const CameraEvent();

  @override
  List<Object?> get props => [];
}

class CameraOnStarted extends CameraEvent {
  const CameraOnStarted();
}
