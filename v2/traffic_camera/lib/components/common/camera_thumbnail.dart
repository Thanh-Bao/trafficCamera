import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:traffic_camera/bloc/cache_network_image/cache_network_image_bloc.dart';
import 'package:traffic_camera/services/camera_service.dart';

class CameraThumbnail extends StatelessWidget {
  CameraThumbnail({
    super.key,
    required this.id,
    required this.width,
    double? height,
  }) {
    const thumbnailRatio = 4 / 3;
    this.height = height ?? (width / thumbnailRatio);
  }

  final String id;
  final double width;
  late final double height;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final textTheme = theme.textTheme;
    return Container(
      width: width,
      height: height,
      clipBehavior: Clip.antiAlias,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(8.0),
        color: Colors.black,
      ),
      child: BlocBuilder<CacheNetworkImageBloc, CacheNetworkImageState>(
        builder: (context, state) {
          if (state is! CacheNetworkImageLoaded) {
            return const _Loading(key: Key('loading'));
          }
          final cacheItem = state.get(id);
          return FutureBuilder(
            initialData: cacheItem.value,
            future: cacheItem.futureValue,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                final cameraImage = snapshot.requireData;

                if (cameraImage.status == CameraImageStatus.maintenance) {
                  return Center(
                    key: const Key('maintenance'),
                    child: Text(
                      'Đang bảo trì',
                      style: textTheme.labelMedium!.copyWith(
                        color: Colors.white,
                      ),
                    ),
                  );
                }

                if (cameraImage.status == CameraImageStatus.hasData) {
                  return Image.memory(
                    key: const Key('image'),
                    cameraImage.data!,
                    alignment: Alignment.center,
                    fit: BoxFit.cover,
                  );
                }

                return _Error(key: const Key('error'), textTheme: textTheme);
              }

              if (snapshot.connectionState == ConnectionState.waiting) {
                return const _Loading(key: Key('loading'));
              }

              return _Error(key: const Key('error'), textTheme: textTheme);
            },
          );
        },
      ),
    );
  }
}

class _Error extends StatelessWidget {
  const _Error({
    super.key,
    required this.textTheme,
  });

  final TextTheme textTheme;

  @override
  Widget build(BuildContext context) {
    return Center(
      key: const Key('error'),
      child: Text(
        'Error',
        style: textTheme.labelMedium!.copyWith(
          color: Colors.white,
        ),
      ),
    );
  }
}

class _Loading extends StatelessWidget {
  const _Loading({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Center(
      key: Key('loading'),
      child: CircularProgressIndicator(),
    );
  }
}
