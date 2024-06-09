part of 'player_bloc.dart';

@immutable
sealed class PlayerEvent extends Equatable {
  const PlayerEvent();

  @override
  List<Object?> get props => [];
}

class PlayerOnToggle extends PlayerEvent {
  const PlayerOnToggle({required this.camera});

  final Camera camera;

  @override
  List<Object?> get props => [camera];
}

class _PlayerOnUpdate extends PlayerEvent {
  const _PlayerOnUpdate({required this.t});

  final int t;

  @override
  List<Object?> get props => [t];
}
