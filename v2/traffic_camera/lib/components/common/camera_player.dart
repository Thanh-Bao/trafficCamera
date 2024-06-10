import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:traffic_camera/bloc/player/player_bloc.dart';
import 'package:traffic_camera/services/camera_service.dart';

class CameraPlayer extends StatelessWidget {
  const CameraPlayer({super.key});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      return ColoredBox(
          color: Colors.black,
          child: BlocSelector<PlayerBloc, PlayerState, CameraImage?>(
            selector: (state) {
              if (state is! PlayerPlaying) return null;
              return state.cameraImage;
            },
            builder: (context, cameraImage) {
              final hasData = (cameraImage != null && cameraImage.status == CameraImageStatus.hasData);

              final imageWidget = hasData
                  ? Image.memory(
                      cameraImage.data!,
                      fit: BoxFit.contain,
                    )
                  : const ColoredBox(color: Colors.black);

              return AnimatedSwitcher(
                duration: Durations.extralong1,
                child: SizedBox(
                  key: Key(cameraImage?.dataId ?? ''),
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
