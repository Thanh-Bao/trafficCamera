import 'dart:typed_data';

import 'package:crypto/crypto.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:traffic_camera/utils/chrome_header/chrome_header.dart';
import 'package:traffic_camera/utils/dlog.dart';
import 'package:uuid/uuid.dart';

const _uuid = Uuid();

enum CameraImageStatus {
  error,
  maintenance,
  hasData,
}

class CameraImage extends Equatable {
  final CameraImageStatus status;
  final Uint8List? data;
  late final String dataId;

  CameraImage({
    required this.status,
    required this.data,
  }) {
    if (data == null) {
      dataId = '';
    } else {
      dataId = md5.convert(data!.toList()).toString();
    }
  }

  @override
  List<Object?> get props => [status, dataId];
}

class CameraService {
  static const _host = 'camera.thongtingiaothong.vn';
  static final _connectionsIds = <String>{};
  static const int _maxConnection = 10;

  static Uri _createUriFromId(String id) {
    //https://camera.thongtingiaothong.vn/api/snapshot/
    final httpsUri = Uri(
      scheme: 'https',
      host: _host,
      path: 'api/snapshot/$id',
    );

    return httpsUri;
  }

  static Future<CameraImage> loadCamera(String id) async {
    while (_connectionsIds.length >= _maxConnection) {
      await Future.delayed(Durations.short1);
    }

    final connectionId = _uuid.v4();

    _connectionsIds.add(connectionId);

    try {
      final result = await _loadCamera(id);

      _connectionsIds.remove(connectionId);

      return result;
    } catch (e) {
      dlog.e(e);

      _connectionsIds.remove(connectionId);

      return CameraImage(
        status: CameraImageStatus.maintenance,
        data: null,
      );
    }
  }

  static Future<CameraImage> _loadCamera(String id) async {
    try {
      final headers = chromeHeader.copyWith(host: _host);
      final uri = _createUriFromId(id);
      dlog.t(uri.toString());

      final response = await http.get(
        _createUriFromId(id),
        headers: headers.toJson(),
      );

      final bodyBytes = response.bodyBytes;

      if (response.statusCode == 200 && bodyBytes.isNotEmpty) {
        return CameraImage(
          status: CameraImageStatus.hasData,
          data: bodyBytes,
        );
      }

      return CameraImage(
        status: CameraImageStatus.maintenance,
        data: null,
      );
    } catch (e) {
      dlog.e(e);

      return CameraImage(
        status: CameraImageStatus.maintenance,
        data: null,
      );
    }
  }
}
