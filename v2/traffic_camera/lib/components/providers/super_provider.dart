import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:traffic_camera/bloc/cache_network_image/cache_network_image_bloc.dart';
import 'package:traffic_camera/bloc/camera/camera_bloc.dart';
import 'package:traffic_camera/bloc/player/player_bloc.dart';

class SuperProvider extends StatelessWidget {
  const SuperProvider({
    super.key,
    required this.child,
  });

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider(
          create: (context) => CameraBloc()..add(const CameraOnStarted()),
        ),
        BlocProvider(
          create: (context) => PlayerBloc(),
        ),
        BlocProvider(
          create: (context) => CacheNetworkImageBloc()..add(const CacheNetworkImageOnStarted()),
        ),
      ],
      child: child,
    );
  }
}
