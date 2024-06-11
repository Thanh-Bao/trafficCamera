import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:traffic_camera/layout/home_layout.dart';
import 'package:traffic_camera/screens/home_screen/home_screen.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = ThemeData(
      colorScheme: ColorScheme.fromSeed(
        seedColor: Colors.blue,
        background: Colors.white,
      ),
      useMaterial3: true,
    );

    final colorScheme = theme.colorScheme;

    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
      statusBarColor: colorScheme.background,
      systemNavigationBarColor: colorScheme.background,
      // statusBarBrightness: theme.brightness,
      statusBarIconBrightness: Brightness.dark,
      systemNavigationBarIconBrightness: Brightness.dark,
    ));

    return MaterialApp(
      title: 'Camera Việt',
      debugShowCheckedModeBanner: false,
      theme: theme,
      home: const HomeLayout(
        child: HomeScreen(),
      ),
    );
  }
}
