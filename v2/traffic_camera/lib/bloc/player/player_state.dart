part of 'player_bloc.dart';

@immutable
sealed class PlayerState extends Equatable {
  const PlayerState();

  @override
  List<Object?> get props => [];
}

final class PlayerStopped extends PlayerState {
  const PlayerStopped();
}

final class PlayerPlaying extends PlayerState {
  PlayerPlaying() {
    final repo = PlayerRepository();
    camera = repo.camera!;
    cameraImage = repo.cameraImage;
    t = repo.t;
  }

  late final int? t;
  late final Camera camera;
  late final CameraImage? cameraImage;

  @override
  List<Object?> get props => [t, cameraImage, camera];
}
