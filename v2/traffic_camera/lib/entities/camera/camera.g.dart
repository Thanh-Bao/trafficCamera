// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'camera.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Camera _$CameraFromJson(Map<String, dynamic> json) => Camera(
      id: json['id'] as String,
      street: json['street'] as String,
      district: json['district'] as String,
      latitude: (json['latitude'] as num).toDouble(),
      longitude: (json['longitude'] as num).toDouble(),
    );

Map<String, dynamic> _$CameraToJson(Camera instance) => <String, dynamic>{
      'id': instance.id,
      'street': instance.street,
      'district': instance.district,
      'latitude': instance.latitude,
      'longitude': instance.longitude,
    };
