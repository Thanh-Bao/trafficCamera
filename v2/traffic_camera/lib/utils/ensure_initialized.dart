import 'dart:async';

import 'package:meta/meta.dart';
import 'package:traffic_camera/utils/dlog.dart';

abstract class EnsureInitialized<T> {
  EnsureInitialized() {
    _initialize();
  }

  String get debugName;

  final _isInitialized = Completer<void>();

  bool get isInitialized => _isInitialized.isCompleted;

  Future<void> ensureInitialized() async {
    if (isInitialized) return;

    await _isInitialized.future;
    return;
  }

  @protected
  Future<void> load();

  @protected
  Future<void> _initialize() async {
    if (isInitialized) return;

    await load();
    _isInitialized.complete();

    dlog.i('[$debugName] initialized');
  }
}
