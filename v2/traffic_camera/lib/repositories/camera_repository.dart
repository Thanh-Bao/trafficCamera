import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:traffic_camera/entities/camera/camera.dart';
import 'package:traffic_camera/utils/dlog.dart';
import 'package:traffic_camera/utils/ensure_initialized.dart';

class CameraRepository extends EnsureInitialized {
  static CameraRepository? _instance;

  factory CameraRepository() {
    _instance ??= CameraRepository._internal();
    return _instance!;
  }

  CameraRepository._internal() : super() {
    dlog.i('[CameraRepository] Constructed');
  }

  @override
  final String debugName = 'CameraRepository';
  List<Camera>? _cameras = [];

  List<Camera>? get cameras => _cameras;

  @protected
  @override
  Future<void> load() async {
    await _loadCameras();
  }

  Future<void> _loadCameras() async {
    final camerasStrJson = await rootBundle.loadString('assets/public/data.json');
    final camerasJson = jsonDecode(camerasStrJson) as List<dynamic>;

    _cameras = camerasJson.map((e) => Camera.fromJson(e)).toList();
  }
}
