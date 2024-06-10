import 'package:flutter/material.dart';
import 'package:traffic_camera/services/camera_service.dart';
import 'package:traffic_camera/utils/ensure_initialized.dart';
import 'package:traffic_camera/utils/memo_cache.dart';

class CacheNetworkImageRepository extends EnsureInitialized {
  static CacheNetworkImageRepository? _instance;

  CacheNetworkImageRepository._internal() : super();

  factory CacheNetworkImageRepository() {
    _instance ??= CacheNetworkImageRepository._internal();
    return _instance!;
  }

  late final MemoCache<CameraImage> _cache;

  @override
  final String debugName = 'CacheNetworkImageRepository';

  MemoCacheItem<CameraImage> get(String key) => _cache.get(key);

  @protected
  @override
  Future<void> load() async {
    _cache = MemoCache<CameraImage>(
      onFetch: _onFetch,
      shouldRemove: _shouldRemoveCache,
    );
  }

  Future<CameraImage> _onFetch(String key) async {
    return await CameraService.loadCamera(key);
  }

  bool _shouldRemoveCache(MemoCacheItem<CameraImage> v) {
    final data = v.value;

    if (data == null) return false;

    return (data.status != CameraImageStatus.hasData);
  }
}
