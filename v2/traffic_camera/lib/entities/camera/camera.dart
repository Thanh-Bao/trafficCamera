import 'package:equatable/equatable.dart';
import 'package:json_annotation/json_annotation.dart';

part 'camera.g.dart';

@JsonSerializable(explicitToJson: true)
class Camera extends Equatable {
  const Camera({
    required this.id,
    required this.street,
    required this.district,
    required this.latitude,
    required this.longitude,
  });

  factory Camera.fromJson(Map<String, dynamic> json) => _$CameraFromJson(json);

  final String id;
  final String street;
  final String district;
  final double latitude;
  final double longitude;

  Map<String, dynamic> toJson(Camera instance) => _$CameraToJson(instance);

  @override
  List<Object?> get props => [id];
}
