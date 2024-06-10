class Util {
  static const _vnAccentsMap = [
    ['a', 'àảãáạăằẳẵắặâầẩẫấậ'],
    ['A', 'ÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ'],
    ['d', 'đ'],
    ['D', 'DĐ'],
    ['e', 'èẻẽéẹêềểễếệ'],
    ['E', 'ÈẺẼÉẸÊỀỂỄẾỆ'],
    ['i', 'ìỉĩíị'],
    ['I', 'ÌỈĨÍỊ'],
    ['o', 'òỏõóọôồổỗốộơờởỡớợ'],
    ['O', 'ÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ'],
    ['u', 'ùủũúụưừửữứự'],
    ['U', 'ÙỦŨÚỤƯỪỬỮỨỰ'],
    ['y', 'ỳỷỹýỵ'],
    ['Y', 'ỲỶỸÝỴ']
  ];

  static String makeSearchString(String v) {
    final re = RegExp('[^0-9a-z\\s]+');
    return v.replaceAll(re, '');
  }

  static String removeVNAccents(String v) {
    var result = v;
    for (var i = 0; i < _vnAccentsMap.length; i++) {
      var [c, accentMap] = _vnAccentsMap[i];
      var re = RegExp('[$accentMap]', caseSensitive: true);
      result = result.replaceAll(re, c);
    }
    return result;
  }
}
