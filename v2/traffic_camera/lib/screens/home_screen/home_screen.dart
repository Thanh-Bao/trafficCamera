import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:traffic_camera/bloc/camera/camera_bloc.dart';
import 'package:traffic_camera/bloc/player/player_bloc.dart';
import 'package:traffic_camera/components/common/camera_list_item.dart';
import 'package:traffic_camera/components/common/camera_play_controller.dart';
import 'package:traffic_camera/components/common/camera_player.dart';
import 'package:traffic_camera/utils/g_config.dart';

part '_home_screen_body.dart';
part '_home_screen_player.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return FractionallySizedBox(
      widthFactor: 1,
      heightFactor: 1,
      child: LayoutBuilder(builder: (context, constraints) {
        final playerHeight = constraints.maxWidth / GConfig.playerRatio;
        final bodyHeight = constraints.maxHeight - playerHeight;
        final width = constraints.maxWidth;
        return Stack(
          children: [
            _Player(
              key: const Key('player'),
              width: width,
              playerHeight: playerHeight,
            ),
            _Body(
              key: const Key('body'),
              width: width,
              minHeight: bodyHeight,
              maxHeight: constraints.maxHeight,
            ),
          ],
        );
      }),
    );
  }
}
