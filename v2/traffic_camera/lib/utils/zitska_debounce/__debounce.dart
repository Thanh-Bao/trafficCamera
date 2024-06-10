part of "zitska_debounce.dart";

class Debounce<Props, Return> extends _ZitskaDebounce<Props, Return> {
  Debounce({required super.duration, required super.callback, super.onReturned});

  @override
  void invoke(Props props) {
    if (_timer != null) {
      _timer!.cancel();
      _timer = null;
    }

    _props = props;
    _timer = Timer(duration, _handler);
  }
}
