import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:traffic_camera/bloc/player/player_bloc.dart';
import 'package:traffic_camera/services/camera_service.dart';

class CameraPlayer extends StatelessWidget {
  const CameraPlayer({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final textStyle = theme.textTheme;
    final messageStyle = textStyle.labelLarge!.copyWith(
      color: Colors.white,
    );
    return LayoutBuilder(builder: (context, constraints) {
      return ColoredBox(
          color: Colors.black,
          child: BlocSelector<PlayerBloc, PlayerState, CameraImage?>(
            selector: (state) {
              if (state is! PlayerPlaying) return null;
              return state.cameraImage;
            },
            builder: (context, cameraImage) {
              if (cameraImage == null) {
                return const Center(
                  key: Key('loading...'),
                  child: CircularProgressIndicator(),
                );
              }

              final imageWidget = switch (cameraImage.status) {
                CameraImageStatus.hasData => Image.memory(
                    key: const Key('image'),
                    cameraImage.data!,
                    fit: BoxFit.contain,
                    errorBuilder: (context, error, stackTrace) {
                      return Center(
                        key: const Key('error'),
                        child: Text(
                          'Error !',
                          style: messageStyle,
                        ),
                      );
                    },
                  ),
                CameraImageStatus.maintenance => Center(
                    key: const Key('maintenance'),
                    child: Text(
                      'Đang bảo trì',
                      style: messageStyle,
                    ),
                  ),
                CameraImageStatus.error => Center(
                    key: const Key('error'),
                    child: Text(
                      'Error !',
                      style: messageStyle,
                    ),
                  ),
              };

              return AnimatedSwitcher(
                duration: Durations.extralong1,
                child: SizedBox(
                  key: Key(cameraImage.dataId),
                  width: constraints.maxWidth,
                  height: constraints.maxHeight,
                  child: imageWidget,
                ),
              );
            },
          ));
    });
  }
}
