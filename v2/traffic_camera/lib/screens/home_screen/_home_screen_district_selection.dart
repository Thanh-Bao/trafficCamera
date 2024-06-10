part of 'home_screen.dart';

class _DistrictSelection extends StatelessWidget {
  const _DistrictSelection({
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
          options: state.districtOptions,
          selected: state.selectedDistrict,
        );
      },
      builder: (context, state) {
        return Selection(
          height: 48,
          title: 'Lọc Theo Quận',
          width: selectionWidth,
          options: state.options,
          selected: state.selected,
          onChange: (selected) {
            context.read<CameraBloc>().add(
                  CameraOnDistrictSelected(
                    selected: selected,
                  ),
                );
          },
        );
      },
    );
  }
}
