import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:traffic_camera/bloc/player/player_bloc.dart';

class CameraPlayController extends StatelessWidget {
  const CameraPlayController({super.key});

  @override
  Widget build(BuildContext context) {
    return FractionallySizedBox(
      widthFactor: 1,
      heightFactor: 1,
      child: Stack(
        children: [
          Positioned(
            key: const Key('counter'),
            bottom: 8.0,
            left: 8.0,
            child: BlocSelector<PlayerBloc, PlayerState, int>(
              selector: (state) {
                if (state is! PlayerPlaying) {
                  return 0;
                }
                return state.t ?? 0;
              },
              builder: (context, t) {
                final remainingTime = 5 - t;

                return SizedBox(
                  key: const Key('circular_progress'),
                  width: 45,
                  height: 45,
                  child: Stack(
                    children: [
                      Positioned.fill(
                        key: const Key('circular_progress'),
                        child: CircularProgressIndicator(
                          value: remainingTime / 5,
                          color: const Color.fromARGB(255, 0, 255, 0),
                          backgroundColor: Colors.grey,
                          strokeWidth: 6,
                        ),
                      ),
                      Positioned.fill(
                        key: const Key('label'),
                        child: Center(
                          child: Text(
                            remainingTime.toString(),
                            style: const TextStyle(
                              color: Colors.white,
                              fontSize: 22,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
