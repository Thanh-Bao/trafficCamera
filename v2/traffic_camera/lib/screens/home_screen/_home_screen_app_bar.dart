part of 'home_screen.dart';

final class _SelectionState extends Equatable {
  const _SelectionState({
    required this.options,
    this.selected,
  });

  final List<Option> options;
  final Option? selected;

  @override
  List<Object?> get props => [selected, options];
}

class _AppBar extends StatelessWidget {
  const _AppBar({
    super.key,
    required this.selectionWidth,
  });

  final double selectionWidth;

  @override
  Widget build(BuildContext context) {
    return SliverAppBar(
      key: const Key('app_bar'),
      floating: true,
      collapsedHeight: kToolbarHeight,
      flexibleSpace: FractionallySizedBox(
        widthFactor: 1,
        heightFactor: 1,
        child: ColoredBox(
          color: Colors.white,
          child: ListView(
            scrollDirection: Axis.horizontal,
            children: [
              Padding(
                key: const Key('districts'),
                padding: const EdgeInsets.only(left: 8.0),
                child: Center(
                  child: _DistrictSelection(
                    key: const Key('district'),
                    selectionWidth: selectionWidth,
                  ),
                ),
              ),
              Padding(
                key: const Key('streets'),
                padding: const EdgeInsets.only(left: 8.0),
                child: Center(
                  child: _StreetSelection(
                    key: const Key('streets'),
                    selectionWidth: selectionWidth,
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
