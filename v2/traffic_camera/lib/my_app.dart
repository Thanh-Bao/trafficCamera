import 'package:flutter/material.dart';
import 'package:traffic_camera/components/providers/super_provider.dart';
import 'package:traffic_camera/layout/home_layout.dart';
import 'package:traffic_camera/screens/home_screen/home_screen.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      home: const SuperProvider(
        child: HomeLayout(
          child: HomeScreen(),
        ),
      ),
    );
  }
}
