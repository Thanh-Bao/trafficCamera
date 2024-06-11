import 'package:flutter/material.dart';
import 'package:traffic_camera/components/providers/super_provider.dart';
import 'package:traffic_camera/my_app.dart';

class Bootstrap extends StatelessWidget {
  const Bootstrap({super.key});

  @override
  Widget build(BuildContext context) {
    return const SuperProvider(
      child: MyApp(),
    );
  }
}
