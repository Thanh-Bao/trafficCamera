part of 'home_screen.dart';

class _StreetSelection extends StatelessWidget {
  const _StreetSelection({
    super.key,
    required this.selectionWidth,
  });

  final double selectionWidth;

  @override
  Widget build(BuildContext context) {
    return BlocSelector<CameraBloc, CameraState, _SelectionState>(
      selector: (state) {
        if (state is! CameraLoaded) {
          return const _SelectionState(options: []);
        }
        return _SelectionState(
          options: state.streetOptions,
          selected: state.selectedStreet,
        );
      },
      builder: (context, state) {
        return Selection(
          height: 48,
          title: 'Tìm Theo Tên Đường',
          width: selectionWidth,
          options: state.options,
          selected: state.selected,
          onChange: (selected) {
            context.read<CameraBloc>().add(
                  CameraOnStreetSelected(
                    selected: selected,
                  ),
                );
          },
        );
      },
    );
  }
}
