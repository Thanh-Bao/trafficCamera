import 'package:equatable/equatable.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:meta/meta.dart';
import 'package:traffic_camera/repositories/cache_network_image_repository.dart';
import 'package:traffic_camera/services/camera_service.dart';
import 'package:traffic_camera/utils/memo_cache.dart';

part 'cache_network_image_event.dart';
part 'cache_network_image_state.dart';

class CacheNetworkImageBloc extends Bloc<CacheNetworkImageEvent, CacheNetworkImageState> {
  CacheNetworkImageBloc() : super(const CacheNetworkImageLoading()) {
    on<CacheNetworkImageOnStarted>(_started);
  }

  final _repo = CacheNetworkImageRepository();

  _started(CacheNetworkImageOnStarted event, Emitter<CacheNetworkImageState> emitter) async {
    emitter(const CacheNetworkImageLoading());
    await _repo.ensureInitialized();
    emitter(CacheNetworkImageLoaded());
  }
}
