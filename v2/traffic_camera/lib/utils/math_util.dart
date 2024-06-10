class MathUtil {
  static double clampDouble({required double value, double? lower, double? upper}) {
    if (upper != null && value > upper) return upper;

    if (lower != null && value < lower) return lower;

    return value;
  }

  static int clampInt({required int value, int? lower, int? upper}) {
    if (upper != null && value > upper) return upper;

    if (lower != null && value < lower) return lower;

    return value;
  }
}
