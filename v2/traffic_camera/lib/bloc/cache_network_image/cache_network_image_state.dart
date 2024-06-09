part of 'cache_network_image_bloc.dart';

@immutable
sealed class CacheNetworkImageState extends Equatable {
  const CacheNetworkImageState();
  @override
  List<Object?> get props => [];
}

final class CacheNetworkImageLoading extends CacheNetworkImageState {
  const CacheNetworkImageLoading();
}

final class CacheNetworkImageLoaded extends CacheNetworkImageState {
  CacheNetworkImageLoaded();

  final _repo = CacheNetworkImageRepository();

  MemoCacheItem<CameraImage> get(String id) {
    return _repo.get(id);
  }

  @override
  List<Object?> get props => [];
}
