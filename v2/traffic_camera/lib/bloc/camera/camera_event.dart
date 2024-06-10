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

class CameraOnDistrictSelected extends CameraEvent {
  const CameraOnDistrictSelected({this.selected});

  final Option? selected;

  @override
  List<Object?> get props => [selected];
}

class CameraOnStreetSelected extends CameraEvent {
  const CameraOnStreetSelected({this.selected});

  final Option? selected;

  @override
  List<Object?> get props => [selected];
}
