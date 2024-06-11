part of 'home_screen.dart';

final districtOptions = <Option>[
  const Option(key: '1', value: 'Quận 1'),
  const Option(key: '2', value: 'Quận 2'),
  const Option(key: '3', value: 'Quận 3'),
];

class _Body extends StatelessWidget {
  const _Body({
    super.key,
    required this.width,
    required this.minHeight,
    required this.maxHeight,
    required this.playerHeight,
  });

  final double width;
  final double minHeight;
  final double maxHeight;
  final double playerHeight;

  @override
  Widget build(BuildContext context) {
    final mediaQuery = MediaQuery.of(context);
    final screenWidth = mediaQuery.size.width;
    final selectionWidth = MathUtil.clampDouble(
      value: (screenWidth - 24) / 2,
      lower: 190,
    );

    return BlocSelector<PlayerBloc, PlayerState, bool>(
      selector: (state) {
        if (state is PlayerPlaying) return true;
        return false;
      },
      builder: (context, isPlaying) {
        return AnimatedPositioned(
          key: const Key('body'),
          duration: Durations.long2,
          curve: Curves.easeInOutBack,
          width: width,
          height: isPlaying ? minHeight : maxHeight,
          top: isPlaying ? playerHeight : 0.0,
          child: ColoredBox(
            color: Colors.white,
            child: CustomScrollView(
              slivers: [
                _AppBar(
                  key: const Key('app_bar'),
                  selectionWidth: selectionWidth,
                ),
                SliverToBoxAdapter(
                  key: const Key('ads_1'),
                  child: MyNativeAd(
                    adUnitId: AdUnits.homeListNativeAd1,
                    templateType: TemplateType.medium,
                    width: width,
                    height: 400,
                  ),
                ),
                const SliverToBoxAdapter(
                  key: Key('the_line'),
                  child: Divider(
                    height: 1,
                  ),
                ),
                BlocSelector<CameraBloc, CameraState, List<Camera>>(
                  key: const Key('list_camera_part1'),
                  selector: (state) {
                    if (state is! CameraLoaded) {
                      return [];
                    }
                    return state.camerasPart1;
                  },
                  builder: (context, cameras) {
                    return SliverList.builder(
                      key: const Key('cameras_part_1'),
                      itemCount: cameras.length,
                      itemBuilder: (listContext, index) {
                        final camera = cameras[index];
                        return CameraListItem(
                          key: Key(camera.id),
                          camera: camera,
                        );
                      },
                    );
                  },
                ),
                SliverToBoxAdapter(
                  key: const Key('ads_2'),
                  child: BlocSelector<CameraBloc, CameraState, bool>(
                    selector: (state) {
                      if (state is! CameraLoaded) {
                        return false;
                      }
                      return state.camerasPart2.isNotEmpty;
                    },
                    builder: (context, state) {
                      if (state == false) {
                        return const SizedBox();
                      }
                      return MyNativeAd(
                        adUnitId: AdUnits.homeListNativeAd2,
                        templateType: TemplateType.medium,
                        width: width,
                        height: 400,
                      );
                    },
                  ),
                ),
                BlocSelector<CameraBloc, CameraState, List<Camera>>(
                  key: const Key('list_camera_part2'),
                  selector: (state) {
                    if (state is! CameraLoaded) {
                      return [];
                    }
                    return state.camerasPart2;
                  },
                  builder: (context, cameras) {
                    return SliverList.builder(
                      key: const Key('cameras_part_2'),
                      itemCount: cameras.length,
                      itemBuilder: (listContext, index) {
                        final camera = cameras[index];
                        return CameraListItem(
                          key: Key(camera.id),
                          camera: camera,
                        );
                      },
                    );
                  },
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
