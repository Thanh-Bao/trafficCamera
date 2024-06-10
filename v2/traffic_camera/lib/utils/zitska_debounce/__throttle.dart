part of 'zitska_debounce.dart';

class Throttle<Props, Return> extends _ZitskaDebounce<Props, Return> {
  int _invokedId = 0;
  int _handledId = 0;
  int _counter = 0;

  Throttle({
    required super.duration,
    required super.callback,
    super.onReturned,
  });

  @override
  void invoke(props) {
    _props = props;
    _invokedId = _uuid();

    if (_timer != null) return;
    _timer = Timer.periodic(duration, _handlerThrottle);
  }

  @override
  void dispose() {
    // log.t('[Throttle] Invoked - dispose');

    super.dispose();
    _invokedId = 0;
    _handledId = 0;
  }

  void _handlerThrottle(Timer timer) {
    if (_handledId == _invokedId) {
      dispose();
      return;
    }

    _handledId = _invokedId;
    _handler();
  }

  int _uuid() {
    final result = _counter;

    _counter++;
    if (_counter > 10000000) {
      _counter = 0;
    }

    return result;
  }
}
