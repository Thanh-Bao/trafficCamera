part of 'home_screen.dart';

class _Body extends StatelessWidget {
  const _Body({
    super.key,
    required this.width,
    required this.minHeight,
    required this.maxHeight,
  });

  final double width;
  final double minHeight;
  final double maxHeight;

  @override
  Widget build(BuildContext context) {
    return BlocSelector<PlayerBloc, PlayerState, bool>(
      selector: (state) {
        if (state is PlayerPlaying) return true;
        return false;
      },
      builder: (context, isPlaying) {
        return AnimatedPositioned(
          key: const Key('body'),
          duration: Durations.long3,
          curve: Curves.easeOut,
          width: width,
          height: isPlaying ? minHeight : maxHeight,
          bottom: 0,
          child: ColoredBox(
            color: Colors.white,
            child: CustomScrollView(
              slivers: [
                BlocBuilder<CameraBloc, CameraState>(
                  builder: (context, state) {
                    if (state is! CameraLoaded) {
                      return const SliverFillRemaining(
                        key: Key('loading'),
                        child: Center(
                          child: CircularProgressIndicator(),
                        ),
                      );
                    }

                    final cameras = state.cameras;

                    return SliverList.builder(
                      key: const Key('cameras'),
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
