part of 'home_screen.dart';

class _Player extends StatelessWidget {
  const _Player({
    super.key,
    required this.width,
    required this.playerHeight,
  });

  final double width;
  final double playerHeight;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      key: const Key('player'),
      width: width,
      height: playerHeight,
      child: const Stack(
        children: [
          Positioned.fill(
            key: Key('player'),
            child: CameraPlayer(),
          ),
          Positioned.fill(
            key: Key('player_controller'),
            child: CameraPlayController(),
          ),
        ],
      ),
    );
  }
}
