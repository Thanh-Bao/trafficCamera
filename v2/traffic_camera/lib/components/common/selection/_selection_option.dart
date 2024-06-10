part of 'selection.dart';

class Option extends Equatable {
  const Option({required this.key, required this.value});
  final String key;
  final String value;

  @override
  List<Object?> get props => [key];
}
