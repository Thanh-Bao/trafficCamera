import 'package:flutter/material.dart';

class HomeLayout extends StatelessWidget {
  const HomeLayout({
    super.key,
    required this.child,
  });

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: SafeArea(
        child: child,
      ),
    );
  }
}
