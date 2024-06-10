import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:traffic_camera/utils/math_util.dart';
import 'package:traffic_camera/utils/util.dart';
import 'package:traffic_camera/utils/zitska_debounce/zitska_debounce.dart';

part '_selection_dialog_app_bar.dart';
part '_selection_dialog.dart';
part '_selection_option.dart';

class Selection extends StatelessWidget {
  const Selection({
    super.key,
    this.height = 48.0,
    this.width,
    required this.options,
    this.title = '',
    this.selected,
    this.onChange,
  });

  final double? width;
  final double height;
  final List<Option> options;
  final Option? selected;
  final Function(Option?)? onChange;
  final String title;

  _handleTapped(BuildContext context) async {
    await showDialog(
      context: context,
      useSafeArea: true,
      builder: (_) => _SelectionDialog(
        key: const Key('dialog'),
        title: title,
        options: options,
        selected: selected,
        onChange: onChange,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;
    final textTheme = theme.textTheme;
    final dropdownBtnSize = height - 8.0;

    return Container(
      width: width,
      height: height,
      clipBehavior: Clip.antiAlias,
      decoration: BoxDecoration(
        color: colorScheme.primaryContainer,
        borderRadius: BorderRadius.circular(8.0),
      ),
      child: Material(
        color: colorScheme.primaryContainer,
        child: InkWell(
          onTap: () {
            _handleTapped(context);
          },
          child: Row(
            children: [
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.only(left: 8.0, right: 8.0),
                  child: Text(
                    selected?.value ?? title,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: textTheme.labelLarge,
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(right: 4.0),
                child: Container(
                  width: dropdownBtnSize,
                  height: dropdownBtnSize,
                  decoration: BoxDecoration(
                    color: colorScheme.primary,
                    borderRadius: BorderRadius.circular(8.0),
                  ),
                  child: Center(
                    child: Icon(
                      Icons.arrow_drop_down,
                      color: colorScheme.onPrimary,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
