import 'dart:async';

import 'package:traffic_camera/utils/dlog.dart';

class MemoCacheItem<T> {
  MemoCacheItem({
    required this.futureValue,
    required this.expiredAt,
    T? initValue,
  }) {
    _value = initValue;
    _waitingToDone();
  }

  T? _value;
  T? get value => _value;
  final int expiredAt;

  final Future<T> futureValue;

  _waitingToDone() async {
    _value = await futureValue;
  }
}

class MemoCache<T> {
  MemoCache({
    required this.onFetch,
    this.shouldRemove,
    this.cleanInterval = const Duration(seconds: 30),
    Duration cacheExpireTime = const Duration(minutes: 5),
  }) {
    this.cacheExpireTime = cacheExpireTime.inMilliseconds;
    _initialize();
  }

  final Future<T> Function(String key) onFetch;
  final bool Function(MemoCacheItem<T>)? shouldRemove;
  final Duration cleanInterval;
  late final int cacheExpireTime;

  final _items = <String, MemoCacheItem<T>>{};
  Timer? _timer;

  MemoCacheItem<T> get(String key) {
    if (_items.containsKey(key)) {
      return _items[key]!;
    }

    final currentTime = DateTime.now().millisecondsSinceEpoch;

    final newItem = MemoCacheItem<T>(
      expiredAt: currentTime + cacheExpireTime,
      futureValue: onFetch(key),
    );

    _items[key] = newItem;
    return _items[key]!;
  }

  void dispose() {
    if (_timer != null) {
      _timer!.cancel();
      _timer = null;
    }

    _items.clear();
  }

  void _initialize() {
    assert(_timer == null);
    _timer = Timer.periodic(cleanInterval, _cleaner);
  }

  _cleaner(Timer timer) async {
    dlog.i('[MemoCache] clean()');

    final currentTime = DateTime.now().millisecondsSinceEpoch;
    _items.removeWhere(
      (key, value) {
        if (shouldRemove != null && shouldRemove!(value)) {
          return true;
        }

        return value.expiredAt < currentTime;
      },
    );

    dlog.i('[MemoCache] items count = ${_items.length}');
  }
}
