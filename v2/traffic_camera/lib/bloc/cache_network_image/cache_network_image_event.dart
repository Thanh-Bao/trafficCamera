part of 'cache_network_image_bloc.dart';

@immutable
sealed class CacheNetworkImageEvent extends Equatable {
  const CacheNetworkImageEvent();

  @override
  List<Object?> get props => [];
}

class CacheNetworkImageOnStarted extends CacheNetworkImageEvent {
  const CacheNetworkImageOnStarted();
}
