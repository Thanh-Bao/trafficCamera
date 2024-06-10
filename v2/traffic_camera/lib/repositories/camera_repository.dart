import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:traffic_camera/components/common/selection/selection.dart';
import 'package:traffic_camera/entities/camera/camera.dart';
import 'package:traffic_camera/utils/dlog.dart';
import 'package:traffic_camera/utils/ensure_initialized.dart';
import 'package:traffic_camera/utils/math_util.dart';

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

  final part1Size = 40;

  List<Camera>? _cameras = [];
  List<Camera>? get cameras => _cameras;

  List<Camera> _camerasPart1 = [];
  List<Camera> get camerasPart1 => _camerasPart1;

  List<Camera> _camerasPart2 = [];
  List<Camera> get camerasPart2 => _camerasPart2;

  Option? _selectedDistrict;
  Option? get selectedDistrict => _selectedDistrict;

  Option? _selectedStreet;
  Option? get selectedStreet => _selectedStreet;

  late final List<Camera> _originalCameras;

  late final List<Option> districtOptions;

  late final List<Option> streetOptions;

  updateDistrictFilter(Option? v) {
    _selectedDistrict = v;
    _selectedStreet = null;

    if (_selectedDistrict == null) {
      _cameras = _originalCameras;
      return;
    }

    final districtName = _selectedDistrict!.value;

    _cameras = _originalCameras.where((element) {
      return (element.district == districtName);
    }).toList();
  }

  updateStreetFilter(Option? v) {
    _selectedStreet = v;
    _selectedDistrict = null;

    if (_selectedStreet == null) {
      _cameras = _originalCameras;
      return;
    }

    final streetName = _selectedStreet!.value;

    _cameras = _originalCameras.where((element) {
      return (element.street == streetName);
    }).toList();
  }

  void splitCameras() {
    if (_cameras == null) {
      _camerasPart1 = [];
      _camerasPart2 = [];
      return;
    }

    final part1Length = MathUtil.clampInt(
      value: part1Size,
      upper: _cameras!.length,
    );

    _camerasPart1 = cameras!.sublist(0, part1Length);

    if (part1Length == _cameras!.length) {
      _camerasPart2 = [];
      return;
    }

    _camerasPart2 = cameras!.sublist(part1Length);
  }

  @protected
  @override
  Future<void> load() async {
    await _loadCameras();
    await _loadOptions();
    splitCameras();
  }

  Future<void> _loadCameras() async {
    final camerasStrJson = await rootBundle.loadString('assets/public/data.json');
    final camerasJson = jsonDecode(camerasStrJson) as List<dynamic>;

    final items = camerasJson.map((e) => Camera.fromJson(e)).toList();

    _originalCameras = [...items];
    _cameras = _originalCameras;
  }

  Future<void> _loadOptions() async {
    final setDistricts = <String>{};
    final setStreets = <String>{};

    for (final item in _originalCameras) {
      setDistricts.add(item.district);
      setStreets.add(item.street);
    }

    districtOptions = setDistricts.map((value) {
      final key = md5.convert(utf8.encoder.convert(value)).toString();
      return Option(
        key: key,
        value: value,
      );
    }).toList();

    streetOptions = setStreets.map((value) {
      final key = md5.convert(utf8.encoder.convert(value)).toString();
      return Option(
        key: key,
        value: value,
      );
    }).toList();

    districtOptions.sort((a, b) {
      final aValue = a.value;
      final bValue = b.value;
      return aValue.compareTo(bValue);
    });

    streetOptions.sort((a, b) {
      final aValue = a.value;
      final bValue = b.value;
      return aValue.compareTo(bValue);
    });
  }
}
