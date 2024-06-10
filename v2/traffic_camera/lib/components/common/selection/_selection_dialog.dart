part of 'selection.dart';

class _SelectionDialog extends StatefulWidget {
  const _SelectionDialog({
    super.key,
    required this.title,
    required this.options,
    this.selected,
    this.onChange,
  });

  final List<Option> options;
  final Option? selected;
  final Function(Option?)? onChange;
  final String title;

  @override
  State<_SelectionDialog> createState() => _SelectionDialogState();
}

class _SelectionDialogState extends State<_SelectionDialog> {
  late List<Option> currentOptions;

  @override
  void initState() {
    super.initState();
    currentOptions = widget.options;
  }

  _handleSelected(Option? option) {
    if (widget.onChange != null) {
      widget.onChange!(option);
    }

    Navigator.of(context).pop();
  }

  _handleSearchChange(String v) {
    if (!mounted) return;
    final searchText = Util.makeSearchString(v);

    final searchRegex = RegExp(
      '.*$searchText.*',
      unicode: true,
    );

    final newOptions = widget.options.where((element) {
      final a = Util.removeVNAccents(element.value.toLowerCase());
      return searchRegex.hasMatch(a);
    }).toList();

    setState(() {
      currentOptions = newOptions;
    });
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final textTheme = theme.textTheme;
    final colorScheme = theme.colorScheme;
    return FractionallySizedBox(
      widthFactor: 1,
      heightFactor: 1,
      child: LayoutBuilder(builder: (context, constraints) {
        final mediaQuery = MediaQuery.of(context);
        final viewPadding = mediaQuery.viewPadding;
        final viewInsets = mediaQuery.viewInsets;
        final screenPaddingBottom = viewPadding.bottom + viewInsets.bottom;
        final screenPaddingTop = viewPadding.top + viewInsets.top;
        final screenPadding = screenPaddingBottom + screenPaddingTop;
        final screenWidth = constraints.maxWidth;
        final screenHeight = constraints.maxHeight - screenPadding;

        final windowWidth = MathUtil.clampDouble(
          upper: screenWidth - 64.0,
          value: 320,
        );

        final windowHeight = MathUtil.clampDouble(
          upper: screenHeight - 32.0,
          value: 600,
        );

        final windowTop = (screenHeight - windowHeight) / 2;
        final windowLeft = (screenWidth - windowWidth) / 2;

        return Stack(
          children: [
            Positioned.fill(
              key: const Key('outside'),
              child: GestureDetector(
                onTap: () {
                  Navigator.of(context).pop();
                },
                child: const ColoredBox(color: Colors.transparent),
              ),
            ),
            AnimatedPositioned(
              key: const Key('window'),
              duration: Durations.long2,
              curve: Curves.easeInOutBack,
              top: windowTop,
              left: windowLeft,
              width: windowWidth,
              height: windowHeight,
              child: Container(
                clipBehavior: Clip.antiAlias,
                width: windowWidth,
                height: windowHeight,
                decoration: BoxDecoration(
                  color: theme.dialogBackgroundColor,
                  borderRadius: BorderRadius.circular(16.0),
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Expanded(
                      key: const Key('main_view'),
                      child: Material(
                        color: theme.dialogBackgroundColor,
                        child: CustomScrollView(
                          slivers: [
                            _DialogAppBar(
                              key: const Key('app_bar'),
                              title: widget.title,
                              onSearchChange: _handleSearchChange,
                            ),
                            SliverList.builder(
                              key: const Key('items'),
                              itemCount: currentOptions.length,
                              itemBuilder: (listContext, index) {
                                final myOption = currentOptions[index];

                                return ListTile(
                                  key: Key(myOption.key),
                                  onTap: () {
                                    Navigator.of(context).pop();

                                    if (widget.onChange != null) {
                                      widget.onChange!(myOption);
                                    }
                                  },
                                  title: Text(myOption.value),
                                  selected: widget.selected == myOption,
                                );
                              },
                            ),
                          ],
                        ),
                      ),
                    ),
                    const Divider(
                      key: Key('divider_bottom'),
                      thickness: 1,
                      height: 1,
                    ),
                    FractionallySizedBox(
                      key: const Key('bottom_bar'),
                      widthFactor: 1,
                      child: SizedBox(
                        height: 50.0,
                        child: Padding(
                          padding: const EdgeInsets.only(right: 8.0),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: [
                              TextButton(
                                onPressed: () {
                                  _handleSelected(null);
                                },
                                child: const Text('Bỏ chọn'),
                              ),
                            ],
                          ),
                        ),
                      ),
                    )
                  ],
                ),
              ),
            ),
          ],
        );
      }),
    );
  }
}
