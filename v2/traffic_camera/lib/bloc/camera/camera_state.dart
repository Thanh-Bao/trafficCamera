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
    camerasPart1 = repo.camerasPart1;
    camerasPart2 = repo.camerasPart2;

    districtOptions = repo.districtOptions;
    streetOptions = repo.streetOptions;
    selectedStreet = repo.selectedStreet;
    selectedDistrict = repo.selectedDistrict;
  }

  late final List<Camera> cameras;
  late final List<Camera> camerasPart1;
  late final List<Camera> camerasPart2;

  late final List<Option> districtOptions;
  late final List<Option> streetOptions;
  late final Option? selectedStreet;
  late final Option? selectedDistrict;

  @override
  List<Object?> get props => [
        cameras,
        districtOptions,
        streetOptions,
        selectedStreet,
        selectedDistrict,
      ];
}
