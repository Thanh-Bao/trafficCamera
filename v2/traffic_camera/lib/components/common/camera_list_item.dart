import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:traffic_camera/bloc/player/player_bloc.dart';
import 'package:traffic_camera/components/common/camera_thumbnail.dart';
import 'package:traffic_camera/entities/camera/camera.dart';

class CameraListItem extends StatelessWidget {
  const CameraListItem({
    super.key,
    required this.camera,
    this.height = 110,
  });

  final Camera camera;
  final double height;

  _handleTapped(BuildContext context) {
    context.read<PlayerBloc>().add(PlayerOnToggle(camera: camera));
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;
    final textTheme = theme.textTheme;
    final selectedColor = colorScheme.primaryContainer.withOpacity(0.5);
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () {
          _handleTapped(context);
        },
        child: BlocSelector<PlayerBloc, PlayerState, Camera?>(
          selector: (state) {
            if (state is! PlayerPlaying) return null;
            return state.camera;
          },
          builder: (context, playingCamera) {
            final isSelected = (playingCamera == camera);
            return ColoredBox(
              color: isSelected ? selectedColor : Colors.transparent,
              child: Padding(
                padding: const EdgeInsets.only(
                  top: 6.0,
                  left: 8.0,
                  bottom: 6.0,
                  right: 8.0,
                ),
                child: FractionallySizedBox(
                  widthFactor: 1,
                  child: SizedBox(
                    height: height,
                    child: Row(
                      mainAxisSize: MainAxisSize.max,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        CameraThumbnail(
                          key: const Key('thumbnail'),
                          id: camera.id,
                          width: 140,
                          height: height,
                        ),
                        _Detail(
                          key: const Key('detail'),
                          camera: camera,
                          textTheme: textTheme,
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

class _Detail extends StatelessWidget {
  const _Detail({
    super.key,
    required this.camera,
    required this.textTheme,
  });

  final Camera camera;
  final TextTheme textTheme;

  @override
  Widget build(BuildContext context) {
    return Expanded(
      key: const Key('detail'),
      child: Padding(
        padding: const EdgeInsets.only(left: 8.0),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              key: const Key('title'),
              mainAxisSize: MainAxisSize.max,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const _Icon(key: Key('icon'), iconData: Icons.videocam_sharp),
                Expanded(
                  key: const Key('label'),
                  child: Text(
                    camera.street,
                    textAlign: TextAlign.start,
                    style: textTheme.titleMedium!.copyWith(
                      height: 1.3,
                      fontSize: 18,
                    ),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.only(top: 4.0),
              child: Row(
                key: const Key('address'),
                mainAxisSize: MainAxisSize.max,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  const _Icon(key: Key('icon'), iconData: Icons.place_sharp),
                  Expanded(
                    key: const Key('label'),
                    child: Text(
                      camera.district,
                      style: textTheme.labelLarge!.copyWith(
                        fontSize: 15.6,
                        height: 1.5,
                        color: Color.alphaBlend(
                          Colors.grey.withOpacity(0.5),
                          textTheme.labelLarge!.color!,
                        ),
                      ),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _Icon extends StatelessWidget {
  const _Icon({
    super.key,
    required this.iconData,
  });

  final IconData iconData;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(
        right: 8.0,
        top: 2.0,
        bottom: 2.0,
      ),
      child: Icon(
        iconData,
        size: 19.4,
      ),
    );
  }
}
