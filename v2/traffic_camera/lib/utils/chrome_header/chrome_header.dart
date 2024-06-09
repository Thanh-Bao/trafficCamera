import 'package:copy_with_extension/copy_with_extension.dart';
import 'package:json_annotation/json_annotation.dart';

part 'chrome_header.g.dart';
part 'chrome_header.sample.dart';

@CopyWith()
@JsonSerializable(
  explicitToJson: true,
)
class ChromeHeader {
  ChromeHeader({
    required this.accept,
    required this.acceptEncoding,
    required this.acceptLanguage,
    required this.cacheControl,
    required this.connection,
    required this.dnt,
    required this.host,
    required this.pragma,
    required this.secFetchDest,
    required this.secFetchMode,
    required this.secFetchSite,
    required this.secFetchUser,
    required this.upgradeInsecureRequests,
    required this.userAgent,
    required this.secChUa,
    required this.secChUaMobile,
    required this.secChUaPlatform,
  });

  factory ChromeHeader.fromJson(Map<String, dynamic> json) => _$ChromeHeaderFromJson(json);

  // "accept",
  @JsonKey(name: 'accept')
  final String accept;

  // "accept-encoding",
  @JsonKey(name: 'accept-encoding')
  final String acceptEncoding;

  // "accept-language",
  @JsonKey(name: 'accept-language')
  final String acceptLanguage;

  // "cache-control",
  @JsonKey(name: 'cache-control')
  final String cacheControl;

  // "connection",
  @JsonKey(name: 'connection')
  final String connection;

  // "dnt",
  @JsonKey(name: 'dnt')
  final String dnt;

  // "host",
  @JsonKey(name: 'host')
  final String host;

  // "pragma",
  @JsonKey(name: 'pragma')
  final String pragma;

  // "sec-fetch-dest",
  @JsonKey(name: 'sec-fetch-dest')
  final String secFetchDest;

  // "sec-fetch-mode",
  @JsonKey(name: 'sec-fetch-mode')
  final String secFetchMode;

  // "sec-fetch-site",
  @JsonKey(name: 'sec-fetch-site')
  final String secFetchSite;

  // "sec-fetch-user",
  @JsonKey(name: 'sec-fetch-user')
  final String secFetchUser;

  // "upgrade-insecure-requests",
  @JsonKey(name: 'upgrade-insecure-requests')
  final String upgradeInsecureRequests;

  // "user-agent",
  @JsonKey(name: 'user-agent')
  final String userAgent;

  // "sec-ch-ua",
  @JsonKey(name: 'sec-ch-ua')
  final String secChUa;

  // "sec-ch-ua-mobile",
  @JsonKey(name: 'sec-ch-ua-mobile')
  final String secChUaMobile;

  // "sec-ch-ua-platform",
  @JsonKey(name: 'sec-ch-ua-platform')
  final String secChUaPlatform;

  Map<String, String> toJson() {
    return Map<String, String>.from(_$ChromeHeaderToJson(this));
  }
}

final chromeHeader = ChromeHeader.fromJson(_sampleHeader);
