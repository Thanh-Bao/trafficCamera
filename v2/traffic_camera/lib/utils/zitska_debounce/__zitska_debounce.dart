part of "zitska_debounce.dart";

abstract class _ZitskaDebounce<Props, Return> {
  final Duration duration;
  final Return Function(Props props) callback;
  final dynamic Function(Return value)? onReturned;

  Props? _props;
  Timer? _timer;

  _ZitskaDebounce({required this.duration, required this.callback, this.onReturned});

  void invoke(Props props);

  void dispose() {
    if (_timer != null) {
      _timer!.cancel();
      _timer = null;
    }

    _props = null;
  }

  void _handler() {
    final result = callback(_props as Props);

    if (onReturned != null) {
      onReturned!(result);
    }
  }
}
