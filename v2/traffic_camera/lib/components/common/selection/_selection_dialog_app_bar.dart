part of 'selection.dart';

class _DialogAppBar extends StatefulWidget {
  const _DialogAppBar({
    super.key,
    required this.title,
    this.onSearchChange,
  });

  final Function(String v)? onSearchChange;
  final String title;

  @override
  State<_DialogAppBar> createState() => _DialogAppBarState();
}

class _DialogAppBarState extends State<_DialogAppBar> {
  late final TextEditingController _textFieldCtrl;
  late final Throttle<String, void> _textChangeThrottle;

  @override
  void initState() {
    super.initState();

    _textFieldCtrl = TextEditingController();
    _textChangeThrottle = Throttle<String, void>(
      duration: Durations.long2,
      callback: _handleTextChange,
    );
  }

  _handleTextChange(String v) {
    if (widget.onSearchChange == null) {
      return;
    }

    widget.onSearchChange!(v);
  }

  @override
  void dispose() {
    _textFieldCtrl.dispose();
    _textChangeThrottle.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final textTheme = theme.textTheme;
    final colorScheme = theme.colorScheme;
    return SliverAppBar(
      key: const Key('app_bar'),
      floating: true,
      collapsedHeight: 75.0,
      flexibleSpace: Padding(
        padding: const EdgeInsets.only(left: 8.0, right: 8.0, top: 8.0),
        child: Column(
          mainAxisSize: MainAxisSize.max,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Flexible(
              child: Text(
                widget.title,
                maxLines: 1,
                style: textTheme.titleMedium,
              ),
            ),
            Expanded(
              key: const Key('search'),
              child: Center(
                child: TextField(
                  controller: _textFieldCtrl,
                  onChanged: _textChangeThrottle.invoke,
                  decoration: InputDecoration(
                    filled: false,
                    fillColor: colorScheme.primaryContainer,
                    hintText: 'Tìm kiếm',
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
      automaticallyImplyLeading: false,
    );
  }
}
