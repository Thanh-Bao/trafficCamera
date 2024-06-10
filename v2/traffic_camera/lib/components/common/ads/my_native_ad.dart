import 'package:flutter/material.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';

class MyNativeAd extends StatefulWidget {
  MyNativeAd({
    super.key,
    required this.adUnitId,
    required this.templateType,
    required this.maxWidth,
    required this.maxHeight,
  }) : props = [adUnitId, templateType];

  final String adUnitId;
  final TemplateType templateType;
  final double maxWidth;
  final double maxHeight;

  final List<dynamic> props;

  @override
  State<MyNativeAd> createState() => _MyNativeAdState();
}

class _MyNativeAdState extends State<MyNativeAd> {
  NativeAd? currentAd;
  final bool adDisplayed = true;

  @override
  void initState() {
    super.initState();
    _loadAd();
  }

  @override
  void dispose() {
    if (currentAd != null) {
      currentAd!.dispose();
      currentAd = null;
    }
    super.dispose();
  }

  @override
  void didUpdateWidget(covariant MyNativeAd oldWidget) {
    if (oldWidget.adUnitId != widget.adUnitId || oldWidget.templateType != widget.templateType) {
      _loadAd();
    }
    super.didUpdateWidget(oldWidget);
  }

  void _loadAd() {
    if (!adDisplayed) return;

    if (currentAd != null) {
      currentAd!.dispose();
      currentAd = null;
    }

    final nativeAd = NativeAd(
      adUnitId: widget.adUnitId,
      nativeTemplateStyle: NativeTemplateStyle(
        templateType: widget.templateType,
      ),
      listener: NativeAdListener(
        onAdLoaded: (ad) {
          if (!mounted) {
            if (currentAd != null) {
              currentAd!.dispose();
              currentAd = null;
            }
            ad.dispose();
            return;
          }
          if (mounted) {
            setState(() {
              currentAd = ad as NativeAd;
            });
          }
        },
        onAdFailedToLoad: (ad, error) {
          ad.dispose();
        },
      ),
      request: const AdRequest(),
    );
    nativeAd.load();
  }

  @override
  Widget build(BuildContext context) {
    if (!adDisplayed || currentAd == null) {
      return const SizedBox();
    }

    return ConstrainedBox(
      constraints: BoxConstraints(
        minWidth: widget.maxWidth,
        maxWidth: widget.maxWidth,
        maxHeight: widget.maxHeight,
        minHeight: (widget.templateType == TemplateType.small) ? 90.0 : 350.0,
      ),
      child: AdWidget(ad: currentAd!),
    );
  }
}
