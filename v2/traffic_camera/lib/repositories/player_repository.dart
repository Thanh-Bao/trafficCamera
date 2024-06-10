import 'package:traffic_camera/entities/camera/camera.dart';
import 'package:traffic_camera/services/camera_service.dart';
import 'package:traffic_camera/utils/ensure_initialized.dart';

class PlayerRepository extends EnsureInitialized {
  static PlayerRepository? _instance;

  factory PlayerRepository() {
    _instance ??= PlayerRepository._internal();
    return _instance!;
  }

  PlayerRepository._internal() : super();

  @override
  final String debugName = 'PlayerRepository';

  CameraImage? _cameraImage;
  CameraImage? get cameraImage => _cameraImage;
  int? t;

  Camera? camera;

  Future<void> updateCameraImage() async {
    if (camera == null) {
      _cameraImage = null;
      return;
    }

    _cameraImage = await CameraService.loadCamera(camera!.id);
  }

  @override
  Future<void> load() async {}
}
