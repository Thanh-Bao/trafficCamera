const URL = "https://camera.thongtingiaothong.vn/api/snapshot/";

const LIST_DISTRICT = [
  "Quận 2",
  "Quận 3",
  "Quận 1",
  "Quận 5",
  "Quận 6",
  "Quận Bình Tân",
  "Huyện Bình Chánh",
  "Quận Phú Nhuận",
  "Quận Tân Phú",
  "Quận Thủ Đức",
  "Quận 9",
  "Quận Gò Vấp",
  "Quận Tân Bình",
  "Quận 7",
  "Quận Bình Thạnh",
  "Quận 8",
  "Quận 12",
  "Huyện Hóc Môn",
  "Huyện Củ Chi",
  "Huyện Nhà Bè",
  "Quận 4",
  "Quận 11",
  "Quận 10"
];


const LIST_CAMERA = [
  {
    "ID": "56de42f611f398ec0c48127d",
    "street": "Mai Chí Thọ - Võ Nguyên Giáp (Cát Lái cầu A)",
    "district": "Quận 2",
    "latitude": 10.80498476893258,
    "longitude": 106.75270736217499
  },
  {
    "ID": "56de42f611f398ec0c48127e",
    "street": "Mai Chí Thọ - Võ Nguyên Giáp (Cát Lái cầu B)",
    "district": "Quận 2",
    "latitude": 10.80625467043043,
    "longitude": 106.75406455993652
  },
  {
    "ID": "56de42f611f398ec0c48127f",
    "street": "Mai Chí Thọ - Lương Định Của 1",
    "district": "Quận 2",
    "latitude": 10.791531914197964,
    "longitude": 106.75110340118408
  },
  {
    "ID": "56de42f611f398ec0c481280",
    "street": "Mai Chí Thọ - Lương Định Của 2",
    "district": "Quận 2",
    "latitude": 10.792627978171955,
    "longitude": 106.75144672393799
  },
  {
    "ID": "56de42f611f398ec0c481282",
    "street": "Mai Chí Thọ - Đồng Văn Cống 2",
    "district": "Quận 2",
    "latitude": 10.787685119587834,
    "longitude": 106.74994468688965
  },
  {
    "ID": "56de42f611f398ec0c481283",
    "street": "Mai Chí Thọ - Trần Não 1",
    "district": "Quận 2",
    "latitude": 10.775796632402953,
    "longitude": 106.72761797904968
  },
  {
    "ID": "56de42f611f398ec0c481284",
    "street": "Nguyễn Thị Minh Khai - Nguyễn Thiện Thuật",
    "district": "Quận 3",
    "latitude": 10.766489980132722,
    "longitude": 106.68248176574707
  },
  {
    "ID": "56de42f611f398ec0c481286",
    "street": "Mai Chí Thọ - Nguyễn Cơ Thạch 2",
    "district": "Quận 2",
    "latitude": 10.773383043524362,
    "longitude": 106.72291874885558
  },
  {
    "ID": "56de42f611f398ec0c481287",
    "street": "Võ Văn Kiệt - Ký Con",
    "district": "Quận 1",
    "latitude": 10.765478141038592,
    "longitude": 106.70014679431915
  },
  {
    "ID": "56de42f611f398ec0c481288",
    "street": "Võ Văn Kiệt - Cầu Ông Lãnh 1",
    "district": "Quận 1",
    "latitude": 10.763791734998435,
    "longitude": 106.6976523399353
  },
  {
    "ID": "56de42f611f398ec0c481289",
    "street": "Võ Văn Kiệt - Cầu Ông Lãnh 2",
    "district": "Quận 1",
    "latitude": 10.76390240568414,
    "longitude": 106.6982853412628
  },
  {
    "ID": "56de42f611f398ec0c48128a",
    "street": "Võ Văn Kiệt - Trần Đình Xu 2",
    "district": "Quận 1",
    "latitude": 10.75877989136107,
    "longitude": 106.69254541397093
  },
  {
    "ID": "56de42f611f398ec0c48128c",
    "street": "Võ Văn Kiệt - Nguyễn Văn Cừ 2",
    "district": "Quận 5",
    "latitude": 10.7536415,
    "longitude": 106.6864407
  },
  {
    "ID": "56de42f611f398ec0c48128b",
    "street": "Võ Văn Kiệt - Nguyễn Văn Cừ 1",
    "district": "Quận 1",
    "latitude": 10.75432133583737,
    "longitude": 106.68691277503967
  },
  {
    "ID": "56de42f611f398ec0c48128d",
    "street": "Hải Thượng Lãn Ông - Cầu Chà Và",
    "district": "Quận 5",
    "latitude": 10.750584741503857,
    "longitude": 106.6600316762924
  },
  {
    "ID": "56de42f611f398ec0c48128f",
    "street": "Võ Văn Kiệt - Huỳnh Mẫn Đạt",
    "district": "Quận 5",
    "latitude": 10.751960277381004,
    "longitude": 106.67719781398773
  },
  {
    "ID": "56de42f611f398ec0c48128e",
    "street": "Võ Văn Kiệt - Cầu Chữ Y 2",
    "district": "Quận 5",
    "latitude": 10.751433252881714,
    "longitude": 106.68410181999207
  },
  {
    "ID": "56de42f611f398ec0c481291",
    "street": "Võ Văn Kiệt - Nguyễn Tri Phương 1",
    "district": "Quận 5",
    "latitude": 10.750337038974697,
    "longitude": 106.66873812675476
  },
  {
    "ID": "56de42f611f398ec0c481292",
    "street": "Võ Văn Kiệt - Phạm Phú Thứ",
    "district": "Quận 6",
    "latitude": 10.741361637875348,
    "longitude": 106.64552092552185
  },
  {
    "ID": "56de42f611f398ec0c481294",
    "street": "Đường hầm - Đầu Quận 1",
    "district": "Quận 1",
    "latitude": 10.767533435639743,
    "longitude": 106.70204043388367
  },
  {
    "ID": "56de42f611f398ec0c481295",
    "street": "Võ Văn Kiệt - Cầu Chà Và 1 (dạ cầu)",
    "district": "Quận 5",
    "latitude": 10.749082712407674,
    "longitude": 106.6599941253662
  },
  {
    "ID": "56de42f611f398ec0c481297",
    "street": "Võ Văn Kiệt - Nguyễn Tri Phương 2",
    "district": "Quận 5",
    "latitude": 10.750368660585494,
    "longitude": 106.6700792312622
  },
  {
    "ID": "56de42f611f398ec0c481298",
    "street": "Võ Văn Kiệt - An Dương Vương 1",
    "district": "Quận Bình Tân",
    "latitude": 10.726361634826802,
    "longitude": 106.61993265151978
  },
  {
    "ID": "56de42f611f398ec0c48129a",
    "street": "Võ Văn Kiệt - Hồ Học Lãm 1",
    "district": "Quận Bình Tân",
    "latitude": 10.722239929521004,
    "longitude": 106.61090433597563
  },
  {
    "ID": "56de42f611f398ec0c48129b",
    "street": "Võ Văn Kiệt - Hồ Học Lãm 2",
    "district": "Quận Bình Tân",
    "latitude": 10.721839351587027,
    "longitude": 106.61146759986876
  },
  {
    "ID": "56de42f611f398ec0c48129d",
    "street": "Quốc lộ 1 - Trần Đại Nghĩa",
    "district": "Huyện Bình Chánh",
    "latitude": 10.722398052243674,
    "longitude": 106.60066902637482
  },
  {
    "ID": "56de42f611f398ec0c481299",
    "street": "Võ Văn Kiệt - An Dương Vương 2",
    "district": "Quận Bình Tân",
    "latitude": 10.726567191549575,
    "longitude": 106.62035107612608
  },
  {
    "ID": "56de42f611f398ec0c48129e",
    "street": "Đồng Văn Cống - Phan Văn Đáng",
    "district": "Quận 2",
    "latitude": 10.7785053,
    "longitude": 106.7572618
  },
  {
    "ID": "56de42f611f398ec0c48129f",
    "street": "Đồng Văn Cống - Nguyễn Thị Định",
    "district": "Quận 2",
    "latitude": 10.7731722,
    "longitude": 106.7702866
  },
  {
    "ID": "56de42f611f398ec0c4812a0",
    "street": "Nguyễn Thị Định - Đường A",
    "district": "Quận 2",
    "latitude": 10.762785156896125,
    "longitude": 106.78359031677245
  },
  {
    "ID": "56de42f611f398ec0c4812a1",
    "street": "Nút giao Mỹ Thủy 1",
    "district": "Quận 2",
    "latitude": 10.769926,
    "longitude": 106.7747069
  },
  {
    "ID": "56de42f611f398ec0c4812a2",
    "street": "Nút giao Mỹ Thủy 2",
    "district": "Quận 2",
    "latitude": 10.7701157,
    "longitude": 106.7755866
  },
  {
    "ID": "56df8108c062921100c143db",
    "street": "Hoàng Minh Giám - Hồng Hà",
    "district": "Quận Phú Nhuận",
    "latitude": 10.80903157324385,
    "longitude": 106.6740220785141
  },
  {
    "ID": "56df807bc062921100c143da",
    "street": "Trường Chinh - Âu Cơ",
    "district": "Quận Tân Phú",
    "latitude": 10.801918013706095,
    "longitude": 106.63648724555968
  },
  {
    "ID": "56df8159c062921100c143dc",
    "street": "Nút giao Thủ Đức (Lê Văn Việt)",
    "district": "Quận Thủ Đức",
    "latitude": 10.849075129161237,
    "longitude": 106.77428305149078
  },
  {
    "ID": "56df8198c062921100c143dd",
    "street": "Nút giao Thủ Đức (Võ Văn Ngân)",
    "district": "Quận Thủ Đức",
    "latitude": 10.849275333482579,
    "longitude": 106.77378416061401
  },
  {
    "ID": "56df81d8c062921100c143de",
    "street": "Nút giao Thủ Đức (trên cầu)",
    "district": "Quận Thủ Đức",
    "latitude": 10.849180499873379,
    "longitude": 106.77400946617126
  },
  {
    "ID": "56df82d4c062921100c143e0",
    "street": "Võ Nguyên Giáp - Tây Hòa 2",
    "district": "Quận 9",
    "latitude": 10.826493329352697,
    "longitude": 106.76086664199829
  },
  {
    "ID": "56df8274c062921100c143df",
    "street": "Võ Nguyên Giáp - Tây Hòa 1",
    "district": "Quận 9",
    "latitude": 10.826493329352697,
    "longitude": 106.7610329389572
  },
  {
    "ID": "56df83d8c062921100c143e3",
    "street": "Nút giao Nguyễn Thái Sơn 1 (Hồng Hà)",
    "district": "Quận Gò Vấp",
    "latitude": 10.814084732739182,
    "longitude": 106.67835116386414
  },
  {
    "ID": "56df84abc062921100c143e5",
    "street": "Nút giao Nguyễn Thái Sơn 3 (Phạm Văn Đồng)",
    "district": "Quận Gò Vấp",
    "latitude": 10.814221730664514,
    "longitude": 106.67923629283905
  },
  {
    "ID": "56df8544c062921100c143e6",
    "street": "Trường Sơn - Ga Quốc Tế",
    "district": "Quận Tân Bình",
    "latitude": 10.813631585309611,
    "longitude": 106.66536390781403
  },
  {
    "ID": "56f11ac33ac17b11001c504c",
    "street": "Nguyễn Văn Trỗi - Hoàng Văn Thụ 1",
    "district": "Quận Tân Bình",
    "latitude": 10.799631100247796,
    "longitude": 106.66841089725494
  },
  {
    "ID": "56f8d743025e9511002786c5",
    "street": "Trường Sơn - Ga Quốc Nội 1",
    "district": "Quận Tân Bình",
    "latitude": 10.81286755611663,
    "longitude": 106.6649293899536
  },
  {
    "ID": "56f11afc3ac17b11001c504e",
    "street": "Trường Sơn - Phan Đình Giót",
    "district": "Quận Tân Bình",
    "latitude": 10.80487411336091,
    "longitude": 106.66421592235565
  },
  {
    "ID": "56f8e708025e9511002786cb",
    "street": "Đường hầm - Ký Con",
    "district": "Quận 1",
    "latitude": 10.76466655930972,
    "longitude": 106.69918656349182
  },
  {
    "ID": "56de42f611f398ec0c481290",
    "street": "Võ Văn Kiệt - An Bình",
    "district": "Quận 5",
    "latitude": 10.749335686252644,
    "longitude": 106.67329251766205
  },
  {
    "ID": "5701e22bc4350a1100e26f6c",
    "street": "Nguyễn Công Trứ - Calmette 1",
    "district": "Quận 1",
    "latitude": 10.76711710786568,
    "longitude": 106.69968008995056
  },
  {
    "ID": "58175ac4edeb6c0012a2d5bb",
    "street": "Mai Chí Thọ - Đồng Văn Cống 1",
    "district": "Quận 2",
    "latitude": 10.78788009529324,
    "longitude": 106.74960672855377
  },
  {
    "ID": "58175c81edeb6c0012a2d5c2",
    "street": "Mai Chí Thọ - Trần Não 2",
    "district": "Quận 2",
    "latitude": 10.775722854863645,
    "longitude": 106.72737658023834
  },
  {
    "ID": "5822adbbedeb6c0012a2d65f",
    "street": "Võ Văn Kiệt - Cầu Chữ Y 1",
    "district": "Quận 5",
    "latitude": 10.751944466659413,
    "longitude": 106.68367266654968
  },
  {
    "ID": "5822b5ededeb6c0012a2d66a",
    "street": "Mai Chí Thọ - Nguyễn Cơ Thạch 1",
    "district": "Quận 2",
    "latitude": 10.77321440777042,
    "longitude": 106.72258615493774
  },
  {
    "ID": "5822f23aedeb6c0012a2d6a8",
    "street": "Hồng Bàng - Nguyễn Thị Nhỏ",
    "district": "Quận 5",
    "latitude": 10.753551885780816,
    "longitude": 106.65115356445312
  },
  {
    "ID": "583f926761cfea0012cf68f1",
    "street": "Nguyễn Thị Định - Cổng A Cảng Cát Lái",
    "district": "Quận 2",
    "latitude": 10.75997093640807,
    "longitude": 106.78657829761505
  },
  {
    "ID": "583f958161cfea0012cf68f5",
    "street": "Nguyễn Thị Định - Đường C",
    "district": "Quận 2",
    "latitude": 10.76602095097508,
    "longitude": 106.77987277507782
  },
  {
    "ID": "583f969161cfea0012cf68f7",
    "street": "Nguyễn Thị Định - Đường D",
    "district": "Quận 2",
    "latitude": 10.764682369364285,
    "longitude": 106.78142309188843
  },
  {
    "ID": "584e71cb61cfea0012cf694b",
    "street": "Quốc lộ 1 - KCN Vĩnh Lộc 3",
    "district": "Quận Bình Tân",
    "latitude": 10.824896838073522,
    "longitude": 106.60326540470123
  },
  {
    "ID": "584e734a61cfea0012cf694f",
    "street": "Quốc lộ 1 - Lê Trọng Tấn",
    "district": "Quận Bình Tân",
    "latitude": 10.816234539123236,
    "longitude": 106.60130739212036
  },
  {
    "ID": "584e738361cfea0012cf6951",
    "street": "Quốc lộ 1 - Nguyễn Thị Tú",
    "district": "Quận Bình Tân",
    "latitude": 10.816129156816537,
    "longitude": 106.60091042518616
  },
  {
    "ID": "585b284ac3f96200127dc500",
    "street": "Huỳnh Tấn Phát - Lưu Trọng Lư 1",
    "district": "Quận 7",
    "latitude": 10.754532143729545,
    "longitude": 106.72779500484465
  },
  {
    "ID": "585b2980c3f96200127dc502",
    "street": "Huỳnh Tấn Phát - Lưu Trọng Lư 2",
    "district": "Quận 7",
    "latitude": 10.755127675228971,
    "longitude": 106.72799348831177
  },
  {
    "ID": "585b2b1ec3f96200127dc505",
    "street": "Nguyễn Văn Linh - Huỳnh Tấn Phát 1",
    "district": "Quận 7",
    "latitude": 10.752882568039677,
    "longitude": 106.7285943031311
  },
  {
    "ID": "585b2baec3f96200127dc508",
    "street": "Nguyễn Văn Linh - Huỳnh Tấn Phát 2",
    "district": "Quận 7",
    "latitude": 10.752545273497212,
    "longitude": 106.72833144664764
  },
  {
    "ID": "586e1d4ef9fab7001111b0a2",
    "street": "Cộng Hòa - Đường C 18",
    "district": "Quận Tân Bình",
    "latitude": 10.801607120963805,
    "longitude": 106.65111064910887
  },
  {
    "ID": "586e20a0f9fab7001111b0a7",
    "street": "Nguyễn Kiệm - Hồ Văn Huê",
    "district": "Quận Phú Nhuận",
    "latitude": 10.806296824744877,
    "longitude": 106.67836189270018
  },
  {
    "ID": "586e25e1f9fab7001111b0ae",
    "street": "Trường Chinh - Tân Kỳ Tân Quý",
    "district": "Quận Tân Bình",
    "latitude": 10.80377282473422,
    "longitude": 106.63591861724854
  },
  {
    "ID": "586e28a0f9fab7001111b0b3",
    "street": "Quốc lộ 1 - KCX Linh Trung 1",
    "district": "Quận Thủ Đức",
    "latitude": 10.872081942302982,
    "longitude": 106.76874160766602
  },
  {
    "ID": "586e2995f9fab7001111b0b5",
    "street": "Ung Văn Khiêm - Nguyễn Gia Trí (D2)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.807519297288547,
    "longitude": 106.71639561653136
  },
  {
    "ID": "58744e3eb807da0011e33cb7",
    "street": "Dương Bá Trạc - Hẻm 288",
    "district": "Quận 8",
    "latitude": 10.74441319877893,
    "longitude": 106.6889190673828
  },
  {
    "ID": "58744e97b807da0011e33cb9",
    "street": "Dương Bá Trạc - Hẻm 219",
    "district": "Quận 8",
    "latitude": 10.746985129442232,
    "longitude": 106.6890424489975
  },
  {
    "ID": "58744f1fb807da0011e33cbd",
    "street": "Hưng Phú - Chánh Hưng 1",
    "district": "Quận 8",
    "latitude": 10.745967954565412,
    "longitude": 106.66898488998413
  },
  {
    "ID": "58744fb0b807da0011e33cc0",
    "street": "Hưng Phú - Chánh Hưng 2",
    "district": "Quận 8",
    "latitude": 10.746389581873245,
    "longitude": 106.66912972927094
  },
  {
    "ID": "587460aab807da0011e33cc2",
    "street": "Quốc lộ 1 - ĐH Nông Lâm 1",
    "district": "Quận Thủ Đức",
    "latitude": 10.867193076987826,
    "longitude": 106.78842902183533
  },
  {
    "ID": "58746122b807da0011e33cc5",
    "street": "Quốc lộ 1 - ĐH Nông Lâm 2",
    "district": "Quận Thủ Đức",
    "latitude": 10.867229954504454,
    "longitude": 106.78794085979462
  },
  {
    "ID": "587461c1b807da0011e33cc8",
    "street": "Quốc lộ 1 - KCX Linh Trung 2",
    "district": "Quận Thủ Đức",
    "latitude": 10.873557015243474,
    "longitude": 106.76550149917603
  },
  {
    "ID": "58746295b807da0011e33ccb",
    "street": "Quốc lộ 1 - Bình Đường",
    "district": "Quận Thủ Đức",
    "latitude": 10.87522173165726,
    "longitude": 106.75896227359772
  },
  {
    "ID": "58746314b807da0011e33cce",
    "street": "Quốc lộ 1 - Cầu vượt Linh Xuân",
    "district": "Quận Thủ Đức",
    "latitude": 10.873330486658844,
    "longitude": 106.76504015922545
  },
  {
    "ID": "58746371b807da0011e33cd1",
    "street": "Quốc lộ 1 - Đường 14",
    "district": "Quận Thủ Đức",
    "latitude": 10.869679665045766,
    "longitude": 106.77595138549805
  },
  {
    "ID": "587463bab807da0011e33cd3",
    "street": "Quốc lộ 1 - Lê Thị Hoa",
    "district": "Quận Thủ Đức",
    "latitude": 10.874779213010948,
    "longitude": 106.74839973449707
  },
  {
    "ID": "5874644cb807da0011e33cd5",
    "street": "Cầu vượt Sóng Thần 1",
    "district": "Quận Thủ Đức",
    "latitude": 10.875806487432769,
    "longitude": 106.75098538398743
  },
  {
    "ID": "58746488b807da0011e33cd7",
    "street": "Cầu vượt Sóng Thần 2",
    "district": "Quận Thủ Đức",
    "latitude": 10.874305085161257,
    "longitude": 106.74850702285767
  },
  {
    "ID": "587464e2b807da0011e33cd9",
    "street": "Cầu vượt nút giao thông Gò Dưa",
    "district": "Quận Thủ Đức",
    "latitude": 10.869958878088818,
    "longitude": 106.73313260078429
  },
  {
    "ID": "58746536b807da0011e33cdc",
    "street": "Cầu vượt Bình Phước 1",
    "district": "Quận Thủ Đức",
    "latitude": 10.865949775189556,
    "longitude": 106.72351956367493
  },
  {
    "ID": "5874656eb807da0011e33cde",
    "street": "Cầu vượt Bình Phước 2",
    "district": "Quận Thủ Đức",
    "latitude": 10.864743346036335,
    "longitude": 106.72421157360077
  },
  {
    "ID": "587470c2b807da0011e33ce4",
    "street": "Nguyễn Hữu Cảnh - Ngô Tất Tố (Cầu Thủ Thiêm 1)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.789202764983797,
    "longitude": 106.71509742736816
  },
  {
    "ID": "587475abb807da0011e33cea",
    "street": "Trường Sơn - Cửu Long",
    "district": "Quận Tân Bình",
    "latitude": 10.809173842715063,
    "longitude": 106.66478991508484
  },
  {
    "ID": "5874769eb807da0011e33cec",
    "street": "Cộng Hòa - Út Tịch 2",
    "district": "Quận Tân Bình",
    "latitude": 10.800105346405301,
    "longitude": 106.65775716304778
  },
  {
    "ID": "58747923b807da0011e33cf5",
    "street": "Nút giao Bảy Hiền 2 (Hoàng Văn Thụ)",
    "district": "Quận Tân Bình",
    "latitude": 10.793197086735836,
    "longitude": 106.6536158323288
  },
  {
    "ID": "5874796db807da0011e33cf7",
    "street": "Trường Chinh - Tây Thạnh 1",
    "district": "Quận Tân Phú",
    "latitude": 10.819922896525796,
    "longitude": 106.63079023361206
  },
  {
    "ID": "587479b1b807da0011e33cf9",
    "street": "Trường Chinh - Tây Thạnh 2",
    "district": "Quận Tân Phú",
    "latitude": 10.818953389832823,
    "longitude": 106.62830114364624
  },
  {
    "ID": "5875d4f8b807da0011e33d1a",
    "street": "Tạ Quang Bửu - Phạm Hùng 1",
    "district": "Quận 8",
    "latitude": 10.737271760059064,
    "longitude": 106.67093753814697
  },
  {
    "ID": "587654d3b807da0011e33d36",
    "street": "Võ Chí Công - Đường số 2",
    "district": "Quận 2",
    "latitude": 10.76254800449792,
    "longitude": 106.76758289337158
  },
  {
    "ID": "587c782db807da0011e33d3b",
    "street": "Võ Nguyên Giáp - Thảo Điền",
    "district": "Quận 2",
    "latitude": 10.801011681423287,
    "longitude": 106.73827707767487
  },
  {
    "ID": "587c79e9b807da0011e33d3d",
    "street": "Điện Biên Phủ - Nguyễn Văn Thương 2",
    "district": "Quận Bình Thạnh",
    "latitude": 10.798687875108948,
    "longitude": 106.71896517276764
  },
  {
    "ID": "587c8183b807da0011e33d3f",
    "street": "Hoàng Văn Thụ - Trần Quốc Hoàn",
    "district": "Quận Tân Bình",
    "latitude": 10.801306766652873,
    "longitude": 106.66226863861083
  },
  {
    "ID": "587c8c20b807da0011e33d47",
    "street": "Hoàng Văn Thụ - Hồ Văn Huê",
    "district": "Quận Phú Nhuận",
    "latitude": 10.799446670984318,
    "longitude": 106.67493402957916
  },
  {
    "ID": "587c8d97b807da0011e33d49",
    "street": "Hoàng Văn Thụ - Nguyễn Văn Trỗi 2",
    "district": "Quận Phú Nhuận",
    "latitude": 10.80010007700767,
    "longitude": 106.66918873786926
  },
  {
    "ID": "587ed91db807da0011e33d4e",
    "street": "Phan Đăng Lưu - Đinh Tiên Hoàng 2",
    "district": "Quận Bình Thạnh",
    "latitude": 10.802481835315886,
    "longitude": 106.69796347618102
  },
  {
    "ID": "587ee0ecb807da0011e33d50",
    "street": "Phan Đăng Lưu - Lê Văn Duyệt",
    "district": "Quận Bình Thạnh",
    "latitude": 10.80199705418249,
    "longitude": 106.69648289680481
  },
  {
    "ID": "587ee2aeb807da0011e33d52",
    "street": "Phan Đăng Lưu - Phan Xích Long",
    "district": "Quận Phú Nhuận",
    "latitude": 10.802039209094714,
    "longitude": 106.68323278427124
  },
  {
    "ID": "587ee7d7b807da0011e33d55",
    "street": "Phan Đăng Lưu - Nơ Trang Long",
    "district": "Quận Bình Thạnh",
    "latitude": 10.803187928175252,
    "longitude": 106.69485211372375
  },
  {
    "ID": "587ef2e4b807da0011e33d57",
    "street": "Nguyễn Văn Trỗi - Nguyễn Trọng Tuyển",
    "district": "Quận Phú Nhuận",
    "latitude": 10.797686683173783,
    "longitude": 106.6723108291626
  },
  {
    "ID": "587ef5dfb807da0011e33d59",
    "street": "Nguyễn Văn Trỗi - Huỳnh Văn Bánh",
    "district": "Quận Phú Nhuận",
    "latitude": 10.792891454492903,
    "longitude": 106.67985320091246
  },
  {
    "ID": "587ef859b807da0011e33d5b",
    "street": "Phạm Văn Đồng - Lê Quang Định 2",
    "district": "Quận Gò Vấp",
    "latitude": 10.820054622736702,
    "longitude": 106.68986856937408
  },
  {
    "ID": "589ad89eb3bf7600110283ac",
    "street": "Tô Ký (Tỉnh lộ 15) - Hẻm 146",
    "district": "Quận 12",
    "latitude": 10.848616766131233,
    "longitude": 106.63361191749573
  },
  {
    "ID": "589add0fb3bf7600110283ae",
    "street": "Tô Ký (Tỉnh lộ 15) - Đông Bắc",
    "district": "Quận 12",
    "latitude": 10.855613311493862,
    "longitude": 106.62333905696869
  },
  {
    "ID": "589b3705b3bf7600110283bd",
    "street": "QL 22 - Nguyễn Ảnh Thủ 1",
    "district": "Quận 12",
    "latitude": 10.855133884772608,
    "longitude": 106.60738527774811
  },
  {
    "ID": "589b39d9b3bf7600110283c1",
    "street": "QL 22 - Nguyễn Ảnh Thủ 2",
    "district": "Quận 12",
    "latitude": 10.855465795661573,
    "longitude": 106.60715997219086
  },
  {
    "ID": "589b3ceeb3bf7600110283c3",
    "street": "QL 22 - Nguyễn Văn Bứa 1",
    "district": "Huyện Hóc Môn",
    "latitude": 10.883734819664491,
    "longitude": 106.58717215061188
  },
  {
    "ID": "589b3f7db3bf7600110283c6",
    "street": "QL 22 - Nguyễn Văn Bứa 2",
    "district": "Huyện Hóc Môn",
    "latitude": 10.884108842088843,
    "longitude": 106.58692538738251
  },
  {
    "ID": "589b4379b3bf7600110283c9",
    "street": "QL 22 - Giáp Hải",
    "district": "Huyện Củ Chi",
    "latitude": 10.971338030981162,
    "longitude": 106.48167550563812
  },
  {
    "ID": "589b4644b3bf7600110283ce",
    "street": "Hà Huy Giáp - Cầu Phú Long 1",
    "district": "Quận 12",
    "latitude": 10.898421431845435,
    "longitude": 106.69312477111816
  },
  {
    "ID": "589d0b74b3bf7600110283d4",
    "street": "Cầu Sài Gòn 4 (Thủ Đức 1)",
    "district": "Quận 2",
    "latitude": 10.799741757751526,
    "longitude": 106.73042893409729
  },
  {
    "ID": "589d0bceb3bf7600110283d6",
    "street": "Cầu Sài Gòn 2 (dạ cầu)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.799030387373364,
    "longitude": 106.7273873090744
  },
  {
    "ID": "58abbee5bd82540010390ba2",
    "street": "Cầu Sài Gòn 5 (dạ cầu Thủ Đức)",
    "district": "Quận 2",
    "latitude": 10.79916212275568,
    "longitude": 106.72939896583557
  },
  {
    "ID": "58abbf72bd82540010390ba4",
    "street": "Cầu Sài Gòn 9 (Bình Thạnh - Thủ Đức)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.79856140894338,
    "longitude": 106.72631978988647
  },
  {
    "ID": "58abc0cbbd82540010390ba6",
    "street": "Cầu Sài Gòn 3 (Dạ cầu Bình Thạnh)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.798228995993401,
    "longitude": 106.72431148588657
  },
  {
    "ID": "58ad6214bd82540010390be2",
    "street": "Cộng Hòa - Hoàng Hoa Thám",
    "district": "Quận Tân Bình",
    "latitude": 10.801312036029335,
    "longitude": 106.6473662853241
  },
  {
    "ID": "58ad6961bd82540010390be5",
    "street": "Nút giao Phú Nhuận 1 (Phan Đình Phùng)",
    "district": "Quận Phú Nhuận",
    "latitude": 10.799046195622289,
    "longitude": 106.68037891387938
  },
  {
    "ID": "58ad69c4bd82540010390be7",
    "street": "Nút giao Phú Nhuận 2 (Phan Đăng Lưu)",
    "district": "Quận Phú Nhuận",
    "latitude": 10.799309666315283,
    "longitude": 106.68036818504333
  },
  {
    "ID": "58ad7291bd82540010390bf9",
    "street": "Phan Đăng Lưu - Nguyễn Văn Đậu",
    "district": "Quận Bình Thạnh",
    "latitude": 10.803841326058494,
    "longitude": 106.68719708919525
  },
  {
    "ID": "58af8a0bbd82540010390c25",
    "street": "Nam Kỳ Khởi Nghĩa - Võ Thị Sáu",
    "district": "Quận 3",
    "latitude": 10.784533873087986,
    "longitude": 106.68854355812073
  },
  {
    "ID": "58af8d68bd82540010390c2e",
    "street": "Nam Kỳ Khởi Nghĩa - Điện Biên Phủ 2",
    "district": "Quận 3",
    "latitude": 10.783337655487262,
    "longitude": 106.6907000541687
  },
  {
    "ID": "58af994abd82540010390c37",
    "street": "Nguyễn Hữu Cảnh - Tôn Đức Thắng",
    "district": "Quận 1",
    "latitude": 10.782631515992442,
    "longitude": 106.70623540878296
  },
  {
    "ID": "58af99abbd82540010390c39",
    "street": "Nguyễn Hữu Cảnh - Nguyễn Bỉnh Khiêm",
    "district": "Quận 1",
    "latitude": 10.784623457474549,
    "longitude": 106.70791447162627
  },
  {
    "ID": "58afccadbd82540010390c3f",
    "street": "Quốc lộ 1 - Nguyễn Hữu Trí 1",
    "district": "Huyện Bình Chánh",
    "latitude": 10.696633500705465,
    "longitude": 106.59646332263947
  },
  {
    "ID": "58afcd9bbd82540010390c41",
    "street": "Quốc lộ 1 - Nguyễn Hữu Trí 2",
    "district": "Huyện Bình Chánh",
    "latitude": 10.696554432630442,
    "longitude": 106.59669935703278
  },
  {
    "ID": "58afdbaebd82540010390c48",
    "street": "Quốc lộ 1 - Cao tốc Trung Lương",
    "district": "Huyện Bình Chánh",
    "latitude": 10.689411864849033,
    "longitude": 106.59253120422363
  },
  {
    "ID": "58afea5dbd82540010390c4d",
    "street": "Quốc lộ 1 - Bùi Thanh Khiết 1",
    "district": "Huyện Bình Chánh",
    "latitude": 10.674193154478866,
    "longitude": 106.5804773569107
  },
  {
    "ID": "58aff2c6bd82540010390c55",
    "street": "Quốc lộ 1 - Đinh Đức Thiện 1",
    "district": "Huyện Bình Chánh",
    "latitude": 10.66478848556424,
    "longitude": 106.56980752944946
  },
  {
    "ID": "58affc6017139d0010f35cc8",
    "street": "Phạm Văn Đồng - Quốc Lộ 13 (1)",
    "district": "Quận Thủ Đức",
    "latitude": 10.826272034039675,
    "longitude": 106.71401381492615
  },
  {
    "ID": "58b5510817139d0010f35d4e",
    "street": "Phạm Văn Đồng - Quốc Lộ 13 (2)",
    "district": "Quận Thủ Đức",
    "latitude": 10.82547115439782,
    "longitude": 106.71435713768005
  },
  {
    "ID": "58b5528e17139d0010f35d52",
    "street": "Xa Lộ Hà Nội - Đường D400",
    "district": "Quận 9",
    "latitude": 10.871944970874125,
    "longitude": 106.80777311325073
  },
  {
    "ID": "58b555ac17139d0010f35d59",
    "street": "Tùng Thiện Vương - Cầu Nhị Thiên Đường",
    "district": "Quận 8",
    "latitude": 10.744381576544276,
    "longitude": 106.65607273578644
  },
  {
    "ID": "58b571c817139d0010f35d5d",
    "street": "Nguyễn Văn Trỗi - Trần Huy Liệu",
    "district": "Quận Phú Nhuận",
    "latitude": 10.794472307568048,
    "longitude": 106.6779488325119
  },
  {
    "ID": "58b5752e17139d0010f35d5f",
    "street": "Nam Kỳ Khởi Nghĩa -Nguyễn Thị Minh Khai 2",
    "district": "Quận 1",
    "latitude": 10.779469677034921,
    "longitude": 106.69517397880554
  },
  {
    "ID": "58c2717ed56e930010a39ac0",
    "street": "Quốc Lộ 50 - Cầu Nhị Thiên Đường 2",
    "district": "Quận 8",
    "latitude": 10.741807325938474,
    "longitude": 106.65606251653571
  },
  {
    "ID": "58d7b3e8c1e33c00112b3207",
    "street": "Quốc lộ 1 - Nguyễn Văn Linh",
    "district": "Huyện Bình Chánh",
    "latitude": 10.690149850119596,
    "longitude": 106.59536361694336
  },
  {
    "ID": "58d7b5a7c1e33c00112b320a",
    "street": "Nút giao Chợ Đệm 1 (CT Trung Lương - Bùi Thanh Khiết)",
    "district": "Huyện Bình Chánh",
    "latitude": 10.685964395604419,
    "longitude": 106.57628774642944
  },
  {
    "ID": "58d7c20ac1e33c00112b321c",
    "street": "Phạm Văn Đồng - Phan Văn Trị 2",
    "district": "Quận Bình Thạnh",
    "latitude": 10.820765943275457,
    "longitude": 106.69480919837952
  },
  {
    "ID": "58d7c2e6c1e33c00112b321e",
    "street": "Trường Chinh - Phan Văn Hớn 1 (Q12-HM)",
    "district": "Quận 12",
    "latitude": 10.82698333982128,
    "longitude": 106.62542581558226
  },
  {
    "ID": "58df4adedc195800111e04b4",
    "street": "Phổ Quang - Huỳnh Lan Khanh",
    "district": "Quận Tân Bình",
    "latitude": 10.804968960996266,
    "longitude": 106.66659235954285
  },
  {
    "ID": "58df4d95dc195800111e04b9",
    "street": "Phổ Quang - Hoàng Minh Giám",
    "district": "Quận Tân Bình",
    "latitude": 10.807961915430065,
    "longitude": 106.67287945747375
  },
  {
    "ID": "58df4e22dc195800111e04bb",
    "street": "Yên Thế - Bạch Đằng",
    "district": "Quận Tân Bình",
    "latitude": 10.814163770011437,
    "longitude": 106.66859328746794
  },
  {
    "ID": "58df50ffdc195800111e04c0",
    "street": "Cộng Hòa - Thăng Long",
    "district": "Quận Tân Bình",
    "latitude": 10.800948448836364,
    "longitude": 106.66075587272644
  },
  {
    "ID": "58e49783d9d6200011e0b9ce",
    "street": "Trường Chinh - Phan Văn Hớn 2 (HM-Q12)",
    "district": "Quận 12",
    "latitude": 10.82747334948839,
    "longitude": 106.62476062774657
  },
  {
    "ID": "58e49e3dd9d6200011e0b9d1",
    "street": "Nam Kỳ Khởi Nghĩa - Lý Chính Thắng",
    "district": "Quận 3",
    "latitude": 10.788602031263844,
    "longitude": 106.68478846549986
  },
  {
    "ID": "58e49ff8d9d6200011e0b9d4",
    "street": "Nam Kỳ Khởi Nghĩa - Trần Quốc Toản",
    "district": "Quận 3",
    "latitude": 10.786315016471113,
    "longitude": 106.6872239112854
  },
  {
    "ID": "591c6833a6bfb500119400a3",
    "street": "Đặng Thúc Vịnh - Trịnh Thị Miếng",
    "district": "Huyện Hóc Môn",
    "latitude": 10.890809558636011,
    "longitude": 106.61337733268738
  },
  {
    "ID": "59414c883dcfc400106f260b",
    "street": "Cộng Hòa - Bình Giã",
    "district": "Quận Tân Bình",
    "latitude": 10.801865320043618,
    "longitude": 106.64510786533354
  },
  {
    "ID": "595d92013dcfc400106f2877",
    "street": "Quốc Lộ 1A - Cầu Bình Phước",
    "district": "Quận 12",
    "latitude": 10.860702563100757,
    "longitude": 106.7151403427124
  },
  {
    "ID": "595da2853dcfc400106f2883",
    "street": "Quốc lộ 1 - Đường 15 (1)",
    "district": "Quận 12",
    "latitude": 10.860101972703431,
    "longitude": 106.69882714748383
  },
  {
    "ID": "595da2dd3dcfc400106f2885",
    "street": "Quốc lộ 1 - Đường 15 (2)",
    "district": "Quận 12",
    "latitude": 10.86011777772936,
    "longitude": 106.69870913028716
  },
  {
    "ID": "595dcab53dcfc400106f289d",
    "street": "Quốc lộ 1 - BQB Trước bến xe Ngã 4 Ga (hướng đi Bình Phước)",
    "district": "Quận 12",
    "latitude": 10.861629788008976,
    "longitude": 106.67849063873291
  },
  {
    "ID": "595dd3a63dcfc400106f28a7",
    "street": "Quốc lộ 1 - Đường Tô Ngọc Vân 1",
    "district": "Quận 12",
    "latitude": 10.861766764171795,
    "longitude": 106.67101800441742
  },
  {
    "ID": "595ddb493dcfc400106f28b6",
    "street": "Quốc lộ 1 - Cầu vượt Tân Thới Hiệp 2",
    "district": "Quận 12",
    "latitude": 10.862088131076382,
    "longitude": 106.64973199367523
  },
  {
    "ID": "595f8d233dcfc400106f28f0",
    "street": "Quốc lộ 1 - Quang Trung 1 (hướng đi Bình Phước)",
    "district": "Quận 12",
    "latitude": 10.852810498226859,
    "longitude": 106.63250684738159
  },
  {
    "ID": "597bf0b8faa7ea0011c7c293",
    "street": "Cầu Phú Hữu 1",
    "district": "Quận 9",
    "latitude": 10.816392612513864,
    "longitude": 106.79167985916138
  },
  {
    "ID": "597bf277faa7ea0011c7c29f",
    "street": "Cầu Phú Hữu 2",
    "district": "Quận 9",
    "latitude": 10.820892400083416,
    "longitude": 106.79230213165283
  },
  {
    "ID": "5990ffdbbec3b90016d2ad2d",
    "street": "Đường hầm (Đầu hầm Tp Thủ Đức)",
    "district": "Quận 2",
    "latitude": 10.77058473176459,
    "longitude": 106.71340227127075
  },
  {
    "ID": "59ca2cac02eb490011a0a3e9",
    "street": "Cầu vượt An Sương 2",
    "district": "Quận 12",
    "latitude": 10.839502045053628,
    "longitude": 106.61174654960632
  },
  {
    "ID": "59ca2cf302eb490011a0a3eb",
    "street": "Cầu vượt An Sương 3",
    "district": "Quận 12",
    "latitude": 10.842700131997601,
    "longitude": 106.61545872688293
  },
  {
    "ID": "59ca2d9d02eb490011a0a3f0",
    "street": "QL1 - Phan Văn Hớn 2",
    "district": "Quận 12",
    "latitude": 10.834296519079377,
    "longitude": 106.60696148872375
  },
  {
    "ID": "59ca301902eb490011a0a400",
    "street": "QL1 - Hương Lộ 2 (1)",
    "district": "Quận Bình Tân",
    "latitude": 10.770236917186804,
    "longitude": 106.59129202365875
  },
  {
    "ID": "59ca308302eb490011a0a403",
    "street": "QL1 - Tân Tạo Chợ Đệm 1",
    "district": "Quận Bình Tân",
    "latitude": 10.767201427461313,
    "longitude": 106.59075558185577
  },
  {
    "ID": "59ca321b02eb490011a0a40d",
    "street": "QL1 - Cầu An Lập",
    "district": "Quận Bình Tân",
    "latitude": 10.728617480445795,
    "longitude": 106.60178482532501
  },
  {
    "ID": "59d3414302eb490011a0a610",
    "street": "Xa Lộ Hà Nội - Đường 120",
    "district": "Quận 9",
    "latitude": 10.86748282878141,
    "longitude": 106.80381417274474
  },
  {
    "ID": "59d34ce302eb490011a0a616",
    "street": "Đỗ Xuân Hợp - Cầu Cống Đập.",
    "district": "Quận 9",
    "latitude": 10.810448995724885,
    "longitude": 106.77621960639952
  },
  {
    "ID": "5a10c79f02eb490011a0b0dd",
    "street": "Mai Chí Thọ - Tố Hữu (C6)",
    "district": "Quận 2",
    "latitude": 10.771317249031346,
    "longitude": 106.71671748161314
  },
  {
    "ID": "5a60604f8576340017d0660b",
    "street": "Nguyễn Thái Sơn - Nguyễn Văn Nghi 2",
    "district": "Quận Gò Vấp",
    "latitude": 10.824317251676183,
    "longitude": 106.6863763332367
  },
  {
    "ID": "5a6060e08576340017d0660f",
    "street": "Nguyễn Thái Sơn - Phan Văn Trị 2",
    "district": "Quận Gò Vấp",
    "latitude": 10.826272034039675,
    "longitude": 106.6891497373581
  },
  {
    "ID": "5a6066608576340017d06617",
    "street": "Quang Trung - Tân Sơn",
    "district": "Quận Gò Vấp",
    "latitude": 10.839438820584958,
    "longitude": 106.64721608161926
  },
  {
    "ID": "5a6069238576340017d0661c",
    "street": "Bạch Đằng - Lê Quang Định",
    "district": "Quận Bình Thạnh",
    "latitude": 10.802618838537821,
    "longitude": 106.69843554496765
  },
  {
    "ID": "5a606a0f8576340017d0661e",
    "street": "Nơ Trang Long - Nguyễn Xí",
    "district": "Quận Bình Thạnh",
    "latitude": 10.820080967971945,
    "longitude": 106.7041164636612
  },
  {
    "ID": "5a606a958576340017d06621",
    "street": "Đinh Bộ Lĩnh - Bạch Đằng 3",
    "district": "Quận Bình Thạnh",
    "latitude": 10.802866498049633,
    "longitude": 106.70946478843688
  },
  {
    "ID": "5a606c078576340017d06624",
    "street": "Quốc lộ 13 - Hiệp Bình",
    "district": "Quận Thủ Đức",
    "latitude": 10.84955456560158,
    "longitude": 106.71891689300537
  },
  {
    "ID": "5a606c758576340017d06626",
    "street": "BX Miền Đông - Quốc Lộ 13 (1)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.81423226896388,
    "longitude": 106.7127799987793
  },
  {
    "ID": "5a606dbc8576340017d0662b",
    "street": "Điện Biên Phủ - Nguyễn Hữu Cảnh",
    "district": "Quận Bình Thạnh",
    "latitude": 10.797818419145367,
    "longitude": 106.72112703323363
  },
  {
    "ID": "5a607ea98576340017d0666d",
    "street": "QL1-Phan Văn Hớn (Q12)",
    "district": "Quận 12",
    "latitude": 10.8343386694508,
    "longitude": 106.60727262496948
  },
  {
    "ID": "5a607f078576340017d0666f",
    "street": "QL1-Phan Văn Hớn (H.Hoc Mon)",
    "district": "Huyện Hóc Môn",
    "latitude": 10.834444045353402,
    "longitude": 106.60677909851074
  },
  {
    "ID": "5a6082698576340017d06678",
    "street": "QL1 - Trạm thu phí AS-AL 2",
    "district": "Quận Bình Tân",
    "latitude": 10.794767399221058,
    "longitude": 106.59654378890991
  },
  {
    "ID": "5a60839c8576340017d0667c",
    "street": "QL1 - Hương Lộ 2 (2)",
    "district": "Quận Bình Tân",
    "latitude": 10.769962881175976,
    "longitude": 106.59143686294556
  },
  {
    "ID": "5a6084208576340017d0667e",
    "street": "QL1 - Tân Tạo Chợ Đệm 2",
    "district": "Quận Bình Tân",
    "latitude": 10.766100000884261,
    "longitude": 106.59055709838867
  },
  {
    "ID": "5a6084898576340017d06680",
    "street": "QL1 - Tân Tạo Chợ Đệm 3",
    "district": "Quận Bình Tân",
    "latitude": 10.764223877445483,
    "longitude": 106.59053564071655
  },
  {
    "ID": "5a6085188576340017d06682",
    "street": "QL1-Tỉnh lộ 10 (2)",
    "district": "Quận Bình Tân",
    "latitude": 10.756329275028753,
    "longitude": 106.5924346446991
  },
  {
    "ID": "5a6085688576340017d06684",
    "street": "QL1-Tỉnh lộ 10 (3)",
    "district": "Quận Bình Tân",
    "latitude": 10.756524271036032,
    "longitude": 106.59175872802734
  },
  {
    "ID": "5a6085fb8576340017d06686",
    "street": "QL1-Tỉnh lộ 10B (1)",
    "district": "Quận Bình Tân",
    "latitude": 10.7499628496621,
    "longitude": 106.59350752830505
  },
  {
    "ID": "5a6086e88576340017d0668a",
    "street": "QL1-Cty Pouyuen (1)",
    "district": "Quận Bình Tân",
    "latitude": 10.748566223482499,
    "longitude": 106.5942370891571
  },
  {
    "ID": "5a6087858576340017d0668e",
    "street": "QL1-Trạm Biến Áp 500Kv Phú Lâm",
    "district": "Quận Bình Tân",
    "latitude": 10.741456505518086,
    "longitude": 106.59887194633484
  },
  {
    "ID": "5a823ba75058170011f6ea9e",
    "street": "Trần Hưng Đạo - Nguyễn Thái Học 1",
    "district": "Quận 1",
    "latitude": 10.768250150460064,
    "longitude": 106.69576942920685
  },
  {
    "ID": "5a823bd55058170011f6eaa0",
    "street": "Trần Hưng Đạo - Nguyễn Thái Học 2",
    "district": "Quận 1",
    "latitude": 10.767533435639743,
    "longitude": 106.69586062431335
  },
  {
    "ID": "5a823d555058170011f6eaa2",
    "street": "Lý Tự Trọng - Hai Bà Trưng 1",
    "district": "Quận 1",
    "latitude": 10.779111333190405,
    "longitude": 106.70211553573608
  },
  {
    "ID": "5a823e425058170011f6eaa4",
    "street": "Đinh Tiên Hoàng - Võ Thị Sáu 1",
    "district": "Quận 1",
    "latitude": 10.79177431330566,
    "longitude": 106.69577479362488
  },
  {
    "ID": "5a8241105058170011f6eaa6",
    "street": "Đinh Tiên Hoàng - Võ Thị Sáu 2",
    "district": "Quận 1",
    "latitude": 10.79192186049289,
    "longitude": 106.69578552246094
  },
  {
    "ID": "5a82439f5058170011f6eaa9",
    "street": "Nguyễn Biểu - Cầu Chữ Y",
    "district": "Quận 5",
    "latitude": 10.75113811876003,
    "longitude": 106.68364584445953
  },
  {
    "ID": "5a824b6c5058170011f6eaab",
    "street": "Nút giao Bốn Xã 3 (Lê Văn Quới)",
    "district": "Quận Tân Phú",
    "latitude": 10.773841521502957,
    "longitude": 106.62139713764189
  },
  {
    "ID": "5a824c3e5058170011f6eaae",
    "street": "Nút giao Bốn Xã 1 (Bình Long)",
    "district": "Quận Tân Phú",
    "latitude": 10.773883680362491,
    "longitude": 106.6216492652893
  },
  {
    "ID": "5a824c905058170011f6eab0",
    "street": "Nút giao Bốn Xã 2 (Hòa Bình)",
    "district": "Quận Tân Phú",
    "latitude": 10.7736939654481,
    "longitude": 106.62178337574005
  },
  {
    "ID": "5a824dc05058170011f6eab2",
    "street": "Quang Trung - Lê Văn Thọ (1)",
    "district": "Quận Gò Vấp",
    "latitude": 10.836604243182496,
    "longitude": 106.65818095207213
  },
  {
    "ID": "5a824e465058170011f6eab4",
    "street": "Quang Trung - Lê Văn Thọ (2)",
    "district": "Quận Gò Vấp",
    "latitude": 10.836699080778736,
    "longitude": 106.65832579135895
  },
  {
    "ID": "5a824ee15058170011f6eab6",
    "street": "Nguyễn Oanh - Phan Văn Trị (1)",
    "district": "Quận Gò Vấp",
    "latitude": 10.830608338604561,
    "longitude": 106.67790055274962
  },
  {
    "ID": "5a824f975058170011f6eab8",
    "street": "Nguyễn Oanh - Phan Văn Trị (2)",
    "district": "Quận Gò Vấp",
    "latitude": 10.83107199807494,
    "longitude": 106.67691349983214
  },
  {
    "ID": "5a8250cc5058170011f6eaba",
    "street": "Lê Văn Việt - Đình Phong Phú 1",
    "district": "Quận 9",
    "latitude": 10.84454942202678,
    "longitude": 106.78128361701965
  },
  {
    "ID": "5a8253615058170011f6eabf",
    "street": "Đinh Bộ Lĩnh - Bạch Đằng 1",
    "district": "Quận Bình Thạnh",
    "latitude": 10.80307200259584,
    "longitude": 106.71002268791199
  },
  {
    "ID": "5a8253bc5058170011f6eac1",
    "street": "Đinh Bộ Lĩnh - Bạch Đằng 2",
    "district": "Quận Bình Thạnh",
    "latitude": 10.803093079977254,
    "longitude": 106.7093950510025
  },
  {
    "ID": "5a8254b05058170011f6eac3",
    "street": "Xô Viết Nghệ Tĩnh - Nguyễn Xí 1",
    "district": "Quận Bình Thạnh",
    "latitude": 10.809674419947996,
    "longitude": 106.71225428581238
  },
  {
    "ID": "5a8254f25058170011f6eac5",
    "street": "Xô Viết Nghệ Tĩnh - Nguyễn Xí 2",
    "district": "Quận Bình Thạnh",
    "latitude": 10.810280380744318,
    "longitude": 106.71241521835327
  },
  {
    "ID": "5a8255a55058170011f6eac7",
    "street": "BX Miền Đông - Đinh Bộ Lĩnh 1",
    "district": "Quận Bình Thạnh",
    "latitude": 10.816814141148168,
    "longitude": 106.71143352985382
  },
  {
    "ID": "5a8256315058170011f6eac9",
    "street": "Đinh Bộ Lĩnh - Nguyễn Xí",
    "district": "Quận Bình Thạnh",
    "latitude": 10.813357588857302,
    "longitude": 106.70956671237944
  },
  {
    "ID": "5a8256df5058170011f6eacb",
    "street": "BX Miền Đông - Quốc Lộ 13 (2)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.817262014672893,
    "longitude": 106.71319842338562
  },
  {
    "ID": "5a8259035058170011f6eacf",
    "street": "Nguyễn Văn Linh - Nguyễn Hữu Thọ (1)",
    "district": "Quận 7",
    "latitude": 10.729123462199427,
    "longitude": 106.70054912567139
  },
  {
    "ID": "5a825ab55058170011f6ead2",
    "street": "Nguyễn Văn Linh - Nguyễn Hữu Thọ (2)",
    "district": "Quận 7",
    "latitude": 10.728986425558082,
    "longitude": 106.70031309127808
  },
  {
    "ID": "5a825b7d5058170011f6ead4",
    "street": "Nguyễn Văn Linh - Nguyễn Hữu Thọ (3)",
    "district": "Quận 7",
    "latitude": 10.728201098992683,
    "longitude": 106.70044183731078
  },
  {
    "ID": "5a825ded5058170011f6ead7",
    "street": "Quốc lộ 50 - Cầu Ông Thìn (2)",
    "district": "Huyện Bình Chánh",
    "latitude": 10.648450872522051,
    "longitude": 106.6558313369751
  },
  {
    "ID": "5a82602c5058170011f6ead9",
    "street": "Vĩnh Lộc - Nguyễn Thị Tú 1",
    "district": "Huyện Bình Chánh",
    "latitude": 10.813578893703603,
    "longitude": 106.57917380332947
  },
  {
    "ID": "5a82628e5058170011f6eadb",
    "street": "Nguyễn Văn Linh - Quốc lộ 50 (1)",
    "district": "Huyện Bình Chánh",
    "latitude": 10.719936599159299,
    "longitude": 106.65566504001617
  },
  {
    "ID": "5a8266105058170011f6eadf",
    "street": "Nguyễn Văn Linh - Quốc lộ 50 (2)",
    "district": "Huyện Bình Chánh",
    "latitude": 10.719077457716304,
    "longitude": 106.6557615995407
  },
  {
    "ID": "5a8267fe5058170011f6eae1",
    "street": "Lê Văn Lương - Cầu Rạch Đĩa",
    "district": "Huyện Nhà Bè",
    "latitude": 10.72357869929447,
    "longitude": 106.69770061969756
  },
  {
    "ID": "5a8269c45058170011f6eae4",
    "street": "Cầu Phú Mỹ (Q7)",
    "district": "Quận 7",
    "latitude": 10.740961085277492,
    "longitude": 106.7367374897003
  },
  {
    "ID": "5a8278f35058170011f6eaed",
    "street": "Nguyễn Văn Linh - Phạm Hùng 1",
    "district": "Huyện Bình Chánh",
    "latitude": 10.728448819673103,
    "longitude": 106.67711734771729
  },
  {
    "ID": "5a8279865058170011f6eaef",
    "street": "Nguyễn Văn Linh - Phạm Hùng 2",
    "district": "Huyện Bình Chánh",
    "latitude": 10.727573890405179,
    "longitude": 106.67788982391357
  },
  {
    "ID": "5aab1f852d266a0017e5afd4",
    "street": "Võ Chí Công - Cầu Phú Mỹ",
    "district": "Quận 2",
    "latitude": 10.74966771410236,
    "longitude": 106.75403237342834
  },
  {
    "ID": "5abbb6d698d8fc001102dfc8",
    "street": "Nguyễn Văn Linh - Nguyễn Lương Bằng (1)",
    "district": "Quận 7",
    "latitude": 10.732085546728056,
    "longitude": 106.71992540359497
  },
  {
    "ID": "5abbb77298d8fc001102dfce",
    "street": "Nguyễn Văn Linh - Nguyễn Lương Bằng (2)",
    "district": "Quận 7",
    "latitude": 10.731569028739164,
    "longitude": 106.71998977661133
  },
  {
    "ID": "5ad0621c98d8fc001102e268",
    "street": "Lý Tự Trọng - Hai Bà Trưng 2",
    "district": "Quận 1",
    "latitude": 10.779137682017028,
    "longitude": 106.70233547687529
  },
  {
    "ID": "5ad0644698d8fc001102e26b",
    "street": "Lã Xuân Oai - Cầu Tăng Long (1)",
    "district": "Quận 9",
    "latitude": 10.826403757459977,
    "longitude": 106.80682897567749
  },
  {
    "ID": "5ad064b498d8fc001102e26f",
    "street": "Lã Xuân Oai - Cầu Tăng Long (2)",
    "district": "Quận 9",
    "latitude": 10.827699912826953,
    "longitude": 106.80599212646483
  },
  {
    "ID": "5ad0679598d8fc001102e274",
    "street": "Lê Văn Việt - Man Thiện",
    "district": "Quận 9",
    "latitude": 10.845234341358218,
    "longitude": 106.78670704364777
  },
  {
    "ID": "5ad068b198d8fc001102e278",
    "street": "Quốc lộ 50 - Cầu Ông Thìn (1)",
    "district": "Huyện Bình Chánh",
    "latitude": 10.652425964575363,
    "longitude": 106.65458679199219
  },
  {
    "ID": "5ad06a0d98d8fc001102e27b",
    "street": "Vĩnh Lộc - Nguyễn Thị Tú 2",
    "district": "Huyện Bình Chánh",
    "latitude": 10.813557817058603,
    "longitude": 106.57931864261626
  },
  {
    "ID": "5b0b7aba0e517b00119fd800",
    "street": "Nguyễn Văn Cừ - Trần Hưng Đạo 1",
    "district": "Quận 5",
    "latitude": 10.756371436338306,
    "longitude": 106.6853678226471
  },
  {
    "ID": "5b0e1faacddcc80011ceb449",
    "street": "Nút giao Hàng Xanh 8 (HX-VT)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.801280419769162,
    "longitude": 106.7119699716568
  },
  {
    "ID": "5b19d34faf4ff60011d6ea52",
    "street": "Nguyễn Tất Thành - Tôn Đản",
    "district": "Quận 4",
    "latitude": 10.762563814663599,
    "longitude": 106.70847237110138
  },
  {
    "ID": "5b5995a3fd4edb0019c7d9ab",
    "street": "Võ Văn Kiệt - Cầu Chà Và 2 (trên cầu)",
    "district": "Quận 5",
    "latitude": 10.748940414526704,
    "longitude": 106.66034817695618
  },
  {
    "ID": "5b632950fd4edb0019c7dc07",
    "street": "Nguyễn Văn Cừ - Trần Hưng Đạo 3",
    "district": "Quận 5",
    "latitude": 10.756877371593221,
    "longitude": 106.68487429618835
  },
  {
    "ID": "5b6329fdfd4edb0019c7dc0b",
    "street": "Nguyễn Trãi - Nguyễn Văn Cừ",
    "district": "Quận 1",
    "latitude": 10.759649460111168,
    "longitude": 106.68437540531158
  },
  {
    "ID": "5b632a79fd4edb0019c7dc0f",
    "street": "Nguyễn Tri Phương - Trần Hưng Đạo",
    "district": "Quận 5",
    "latitude": 10.752424058178907,
    "longitude": 106.66951060295105
  },
  {
    "ID": "5b632b60fd4edb0019c7dc12",
    "street": "Hồng Bàng - Ngô Quyền 1",
    "district": "Quận 5",
    "latitude": 10.755717935377916,
    "longitude": 106.6664206981659
  },
  {
    "ID": "5b728aafca0577001163ff7e",
    "street": "Hồng Bàng - Châu Văn Liêm",
    "district": "Quận 5",
    "latitude": 10.754843085101587,
    "longitude": 106.6589105129242
  },
  {
    "ID": "5b87c386ca057700116404a6",
    "street": "Đường hầm (Đầu hầm Tp Thủ Đức)",
    "district": "Quận 2",
    "latitude": 10.771043214003438,
    "longitude": 106.71590209007263
  },
  {
    "ID": "5b8b2323ca057700116405d0",
    "street": "Trường Sơn - Ga Quốc Nội 2",
    "district": "Quận Tân Bình",
    "latitude": 10.812946593709597,
    "longitude": 106.66490256786346
  },
  {
    "ID": "5bbc7163ca0577001164127f",
    "street": "Lê Văn Lương - Cầu Long Kiểng (HCM)",
    "district": "Huyện Nhà Bè",
    "latitude": 10.689564733373853,
    "longitude": 106.7025500535965
  },
  {
    "ID": "5d8cd1f9766c880017188938",
    "street": "Nguyễn Tri Phương - Trần Phú",
    "district": "Quận 5",
    "latitude": 10.753578236842605,
    "longitude": 106.66956961154938
  },
  {
    "ID": "5d8cd2a3766c88001718893c",
    "street": "Nút giao Cây Gõ 1 (trên cầu)",
    "district": "Quận 11",
    "latitude": 10.754442550393371,
    "longitude": 106.64291381835938
  },
  {
    "ID": "5d8cd372766c880017188940",
    "street": "Nút giao Cây Gõ 2 (Minh Phụng)",
    "district": "Quận 11",
    "latitude": 10.755027541696245,
    "longitude": 106.64326786994934
  },
  {
    "ID": "5d8cd3b7766c880017188942",
    "street": "Lê Hồng Phong - Nguyễn Trãi",
    "district": "Quận 5",
    "latitude": 10.757341144831328,
    "longitude": 106.67818486690521
  },
  {
    "ID": "5d8cd49f766c880017188944",
    "street": "Nguyễn Tri Phương - Nguyễn Trãi",
    "district": "Quận 5",
    "latitude": 10.754700789937207,
    "longitude": 106.66949987411498
  },
  {
    "ID": "5d8cd542766c880017188948",
    "street": "Võ Văn Ngân - Đặng Văn Bi",
    "district": "Quận Thủ Đức",
    "latitude": 10.851145656849512,
    "longitude": 106.75798058509827
  },
  {
    "ID": "5d8cd70e766c88001718894e",
    "street": "Phạm Văn Đồng - Nguyễn Xí (hướng đi Thủ Đức)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.822831397791592,
    "longitude": 106.70344591140747
  },
  {
    "ID": "5d8cd767766c880017188950",
    "street": "Phạm Văn Đồng - Nguyễn Xí (hướng đi Sân bay)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.823047426650916,
    "longitude": 106.70296847820282
  },
  {
    "ID": "5d8cd7bb766c880017188952",
    "street": "Phạm Văn Đồng - Đường 20 (hướng đi Thủ Đức)",
    "district": "Quận Thủ Đức",
    "latitude": 10.828927567007197,
    "longitude": 106.72274708747864
  },
  {
    "ID": "5d8cd886766c880017188956",
    "street": "Phạm Văn Đồng - Hiệp Bình (hướng đi Thủ Đức)",
    "district": "Quận Thủ Đức",
    "latitude": 10.837252299491256,
    "longitude": 106.73284828662872
  },
  {
    "ID": "5d8cd8e2766c880017188958",
    "street": "Phạm Văn Đồng - Hiệp Bình (hướng đi Sân bay)",
    "district": "Quận Thủ Đức",
    "latitude": 10.837405093050696,
    "longitude": 106.73284828662872
  },
  {
    "ID": "5d8cd98d766c88001718895a",
    "street": "Phạm Văn Đồng - Tô Ngọc Vân (hướng đi Bình Dương)",
    "district": "Quận Thủ Đức",
    "latitude": 10.85339529790214,
    "longitude": 106.75146281719206
  },
  {
    "ID": "5d8cd9cb766c88001718895c",
    "street": "Phạm Văn Đồng - Tô Ngọc Vân (hướng đi Sân bay)",
    "district": "Quận Thủ Đức",
    "latitude": 10.853600767786636,
    "longitude": 106.75131797790527
  },
  {
    "ID": "5d8cda2e766c88001718895e",
    "street": "Phạm Văn Đồng - Kha Vạn Cân (hướng đi Quốc lộ 1)",
    "district": "Quận Thủ Đức",
    "latitude": 10.840819218445986,
    "longitude": 106.74354493618011
  },
  {
    "ID": "5d8cda6a766c880017188960",
    "street": "Phạm Văn Đồng - Kha Vạn Cân (hướng đi Sân bay)",
    "district": "Quận Thủ Đức",
    "latitude": 10.84119329463218,
    "longitude": 106.74382388591766
  },
  {
    "ID": "5d8cdac3766c880017188962",
    "street": "Trường Chinh - Đồng Đen",
    "district": "Quận Tân Bình",
    "latitude": 10.797038541352348,
    "longitude": 106.64591252803801
  },
  {
    "ID": "5d8cdb0a766c880017188964",
    "street": "Trường Chinh - Xuân Hồng",
    "district": "Quận Tân Bình",
    "latitude": 10.793713499129755,
    "longitude": 106.65165781974792
  },
  {
    "ID": "5d8cdb4b766c880017188966",
    "street": "Hoàng Văn Thụ - Út Tịch",
    "district": "Quận Tân Bình",
    "latitude": 10.79805554374863,
    "longitude": 106.65837407112122
  },
  {
    "ID": "5d8cdb9f766c880017188968",
    "street": "Hoàng Văn Thụ - Trần Huy Liệu",
    "district": "Quận Phú Nhuận",
    "latitude": 10.79937289924722,
    "longitude": 106.67747139930725
  },
  {
    "ID": "5d8cdc1d766c88001718896c",
    "street": "Trường Sơn - Hậu Giang",
    "district": "Quận Tân Bình",
    "latitude": 10.80767210600642,
    "longitude": 106.66447877883911
  },
  {
    "ID": "5d8cdc57766c88001718896e",
    "street": "Lý Thường Kiệt - Lạc Long Quân",
    "district": "Quận Tân Bình",
    "latitude": 10.790446385361513,
    "longitude": 106.65247321128845
  },
  {
    "ID": "5d8cdc9d766c880017188970",
    "street": "Lạc Long Quân - Âu Cơ",
    "district": "Quận 11",
    "latitude": 10.774769015049133,
    "longitude": 106.64788126945496
  },
  {
    "ID": "5d8cdcf0766c880017188972",
    "street": "Nút giao Lê Đại Hành 1 (Bình Thới)",
    "district": "Quận 11",
    "latitude": 10.768803495294643,
    "longitude": 106.6518348455429
  },
  {
    "ID": "5d8cdd26766c880017188974",
    "street": "Nút giao Lê Đại Hành 2 (Lê Đại Hành)",
    "district": "Quận 11",
    "latitude": 10.768835114968786,
    "longitude": 106.65262341499329
  },
  {
    "ID": "5d9ddd49766c880017188c94",
    "street": "Nút giao Hàng Xanh 1 (Viện Máy tính)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.801654545301231,
    "longitude": 106.71106338500977
  },
  {
    "ID": "5d9dddb9766c880017188c96",
    "street": "Nút giao Hàng Xanh 2 (ĐH Hồng Bàng)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.799878762223457,
    "longitude": 106.70660018920898
  },
  {
    "ID": "5d9dde1f766c880017188c98",
    "street": "Nút giao Hàng Xanh 3 (Cầu Thị Nghè - Hàng Xanh)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.80014223218617,
    "longitude": 106.71129405498505
  },
  {
    "ID": "5d9ddec9766c880017188c9c",
    "street": "Nút giao Hàng Xanh 5 (Hàng Xanh - Bạch Đằng)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.802155135072839,
    "longitude": 106.71150326728821
  },
  {
    "ID": "5d9ddf49766c880017188ca0",
    "street": "Nút giao Hàng Xanh 7 (Hàng Xanh - Cầu Văn Thánh)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.801227725994805,
    "longitude": 106.71232402324675
  },
  {
    "ID": "5d9de3c2766c880017188cb3",
    "street": "Cao tốc LTDG - Cầu Bà Dạt 3",
    "district": "Quận 2",
    "latitude": 10.792901993540932,
    "longitude": 106.75486385822296
  },
  {
    "ID": "5d9de43b766c880017188cb6",
    "street": "Cao tốc LTDG - Đỗ Xuân Hợp 1",
    "district": "Quận 2",
    "latitude": 10.796553751433649,
    "longitude": 106.7788964509964
  },
  {
    "ID": "5deb576d1dc17d7c5515acf2",
    "street": "Điện Biên Phủ - Cách Mạng Tháng Tám",
    "district": "Quận 3",
    "latitude": 10.776571295473905,
    "longitude": 106.6836941242218
  },
  {
    "ID": "5deb576d1dc17d7c5515acf3",
    "street": "Ba Tháng Hai - Lý Thái Tổ",
    "district": "Quận 10",
    "latitude": 10.768198,
    "longitude": 106.668459
  },
  {
    "ID": "5deb576d1dc17d7c5515acf4",
    "street": "Nút giao Ngã bảy Lý Thái Tổ",
    "district": "Quận 10",
    "latitude": 10.767465,
    "longitude": 106.674156
  },
  {
    "ID": "5deb576d1dc17d7c5515acf5",
    "street": "Nút giao Ngã bảy Lý Thái Tổ",
    "district": "Quận 10",
    "latitude": 10.767428,
    "longitude": 106.674596
  },
  {
    "ID": "5deb576d1dc17d7c5515acf6",
    "street": "Nút giao Ngã sáu Cộng Hòa",
    "district": "Quận 5",
    "latitude": 10.765389,
    "longitude": 106.681205
  },
  {
    "ID": "5deb576d1dc17d7c5515acf7",
    "street": "Nút giao Ngã sáu Cộng Hòa",
    "district": "Quận 5",
    "latitude": 10.765059,
    "longitude": 106.68172
  },
  {
    "ID": "5deb576d1dc17d7c5515acf8",
    "street": "Ba Tháng Hai - Cao Thắng",
    "district": "Quận 10",
    "latitude": 10.773823,
    "longitude": 106.67782
  },
  {
    "ID": "5deb576d1dc17d7c5515acf9",
    "street": "Nút giao Công Trường Dân Chủ",
    "district": "Quận 10",
    "latitude": 10.777768,
    "longitude": 106.68202
  },
  {
    "ID": "5deb576d1dc17d7c5515acfb",
    "street": "Võ Thị Sáu - Bà Huyện Thanh Quan",
    "district": "Quận 3",
    "latitude": 10.780186363443855,
    "longitude": 106.68426275253296
  },
  {
    "ID": "5deb576d1dc17d7c5515acfc",
    "street": "Điện Biên Phủ - Trương Định",
    "district": "Quận 3",
    "latitude": 10.780012461751467,
    "longitude": 106.68729364871979
  },
  {
    "ID": "5deb576d1dc17d7c5515acfd",
    "street": "Lý Chính Thắng - Nguyễn Thông",
    "district": "Quận 3",
    "latitude": 10.779306314452835,
    "longitude": 106.6821813583374
  },
  {
    "ID": "5deb576d1dc17d7c5515acfe",
    "street": "Lý Chính Thắng - Trương Định",
    "district": "Quận 3",
    "latitude": 10.782515582484137,
    "longitude": 106.68368875980377
  },
  {
    "ID": "5deb576d1dc17d7c5515ad05",
    "street": "Điện Biên Phủ - Đinh Tiên Hoàng",
    "district": "Quận 1",
    "latitude": 10.790705,
    "longitude": 106.697491
  },
  {
    "ID": "5deb576d1dc17d7c5515ad06",
    "street": "Đinh Tiên Hoàng - Nguyễn Đình Chiểu",
    "district": "Quận 1",
    "latitude": 10.788566,
    "longitude": 106.699558
  },
  {
    "ID": "5deb576d1dc17d7c5515ad07",
    "street": "Nguyễn Văn Trỗi - Trương Quốc Dung",
    "district": "Quận Phú Nhuận",
    "latitude": 10.797381,
    "longitude": 106.672665
  },
  {
    "ID": "5deb576d1dc17d7c5515ad08",
    "street": "Cộng Hòa - Tân Kỳ Tân Quý",
    "district": "Quận Tân Bình",
    "latitude": 10.804136408507423,
    "longitude": 106.63765132427216
  },
  {
    "ID": "5deb576d1dc17d7c5515ad09",
    "street": "Trường Chinh - Hoàng Hoa Thám",
    "district": "Quận Tân Bình",
    "latitude": 10.79645363167906,
    "longitude": 106.64701759815216
  },
  {
    "ID": "5deb576d1dc17d7c5515ad0a",
    "street": "Hoàng Văn Thụ - Xuân Diệu",
    "district": "Quận Tân Bình",
    "latitude": 10.795418,
    "longitude": 106.655729
  },
  {
    "ID": "5deb576d1dc17d7c5515ad15",
    "street": "Lý Tự Trọng - Chu Mạnh Trinh",
    "district": "Quận 1",
    "latitude": 10.781944,
    "longitude": 106.704602
  },
  {
    "ID": "5deb576d1dc17d7c5515ad16",
    "street": "Nguyễn Thị Minh Khai - Pasteur",
    "district": "Quận 1",
    "latitude": 10.780518,
    "longitude": 106.695957
  },
  {
    "ID": "5deb576d1dc17d7c5515ad17",
    "street": "Nguyễn Thị Minh Khai - Hai Bà Trưng",
    "district": "Quận 1",
    "latitude": 10.782987,
    "longitude": 106.698076
  },
  {
    "ID": "5deb576d1dc17d7c5515ad18",
    "street": "Hai Bà Trưng - Lê Duẩn",
    "district": "Quận 1",
    "latitude": 10.781431,
    "longitude": 106.699614
  },
  {
    "ID": "5deb576d1dc17d7c5515ad19",
    "street": "Nguyễn Thị Minh Khai - Mạc Đĩnh Chi",
    "district": "Quận 1",
    "latitude": 10.784426,
    "longitude": 106.699659
  },
  {
    "ID": "5deb576d1dc17d7c5515ad1a",
    "street": "Pasteur - Lê Duẩn",
    "district": "Quận 1",
    "latitude": 10.779127,
    "longitude": 106.697417
  },
  {
    "ID": "5deb576d1dc17d7c5515ad1b",
    "street": "Hoàng Diệu - Cầu Ông Lãnh",
    "district": "Quận 4",
    "latitude": 10.761236,
    "longitude": 106.700404
  },
  {
    "ID": "5deb576d1dc17d7c5515ad1c",
    "street": "Hoàng Diệu - Nguyễn Tất Thành",
    "district": "Quận 4",
    "latitude": 10.765293690837588,
    "longitude": 106.70726001262665
  },
  {
    "ID": "5deb576d1dc17d7c5515ad1d",
    "street": "Nguyễn Công Trứ - Calmette 2",
    "district": "Quận 1",
    "latitude": 10.76737533655278,
    "longitude": 106.69984638690948
  },
  {
    "ID": "5deb576d1dc17d7c5515ad1e",
    "street": "Pasteur - Hàm Nghi",
    "district": "Quận 1",
    "latitude": 10.770674,
    "longitude": 106.702639
  },
  {
    "ID": "5deb576d1dc17d7c5515ad1f",
    "street": "Hùng Vương - Ngô Gia Tự",
    "district": "Quận 5",
    "latitude": 10.756329275028753,
    "longitude": 106.66647434234619
  },
  {
    "ID": "5deb576d1dc17d7c5515ad20",
    "street": "Hồng Bàng - Ngô Quyền 2",
    "district": "Quận 5",
    "latitude": 10.755881,
    "longitude": 106.666241
  },
  {
    "ID": "5deb576d1dc17d7c5515ad21",
    "street": "Nút giao Ngã sáu Nguyễn Tri Phương",
    "district": "Quận 10",
    "latitude": 10.759539,
    "longitude": 106.668851
  },
  {
    "ID": "5deb576d1dc17d7c5515ad22",
    "street": "Nút giao Ngã sáu Nguyễn Tri Phương",
    "district": "Quận 10",
    "latitude": 10.76009,
    "longitude": 106.669124
  },
  {
    "ID": "62da3e390637a10017d706ff",
    "street": "Quốc Lộ 13 - Đinh Thị Thi 1",
    "district": "Quận Thủ Đức",
    "latitude": 10.844444049682709,
    "longitude": 106.71823024749756
  },
  {
    "ID": "62da3e620637a10017d70720",
    "street": "Quốc Lộ 13 - Đinh Thị Thi 2",
    "district": "Quận Thủ Đức",
    "latitude": 10.845697978169245,
    "longitude": 106.71817660331726
  },
  {
    "ID": "62da3e840637a10017d7073d",
    "street": "Quốc Lộ 13 - Đinh Thị Thi 3",
    "district": "Quận Thủ Đức",
    "latitude": 10.845107894830463,
    "longitude": 106.71789765357971
  },
  {
    "ID": "631812e6c9eae60017a19567",
    "street": "Cầu Sài Gòn 11 (Bình Thạnh)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.798081890915219,
    "longitude": 106.72335863113403
  },
  {
    "ID": "631813ebc9eae60017a196b0",
    "street": "Cầu Sài Gòn 8 (Thủ Đức)",
    "district": "Quận 2",
    "latitude": 10.799552059148736,
    "longitude": 106.73122823238373
  },
  {
    "ID": "6318283cc9eae60017a19f0c",
    "street": "Nguyễn Thị Minh Khai - Đinh Tiên Hoàng 1",
    "district": "Quận 1",
    "latitude": 10.786610116131385,
    "longitude": 106.70156836509703
  },
  {
    "ID": "631828cac9eae60017a19f50",
    "street": "Nguyễn Thị Minh Khai - Nguyễn Bỉnh Khiêm",
    "district": "Quận 1",
    "latitude": 10.788707423231353,
    "longitude": 106.70353174209595
  },
  {
    "ID": "63195512c9eae60017a1c279",
    "street": "Nguyễn Trãi - Cống Quỳnh 1",
    "district": "Quận 1",
    "latitude": 10.766339939594687,
    "longitude": 106.68810371554173
  },
  {
    "ID": "63195556c9eae60017a1c2ba",
    "street": "Nguyễn Trãi - Cống Quỳnh 2",
    "district": "Quận 1",
    "latitude": 10.766830262802149,
    "longitude": 106.68801572479424
  },
  {
    "ID": "631955e7c9eae60017a1c30a",
    "street": "Cách Mạng Tháng Tám – Hòa Hưng",
    "district": "Quận 10",
    "latitude": 10.780223251668712,
    "longitude": 106.67714416980743
  },
  {
    "ID": "63ae73cebfd3d90017e8f00d",
    "street": "Nguyễn Thị Minh Khai - Cống Quỳnh",
    "district": "Quận 1",
    "latitude": 10.768424058946168,
    "longitude": 106.68436467647551
  },
  {
    "ID": "63ae75a3bfd3d90017e8f051",
    "street": "Cống Quỳnh - Phạm Viết Chánh",
    "district": "Quận 1",
    "latitude": 10.767891793263033,
    "longitude": 106.68545365333556
  },
  {
    "ID": "63ae75debfd3d90017e8f082",
    "street": "Cao Thắng – Võ Văn Tần 1",
    "district": "Quận 1",
    "latitude": 10.768503108224836,
    "longitude": 106.6838926076889
  },
  {
    "ID": "63ae75f9bfd3d90017e8f097",
    "street": "Cao Thắng – Võ Văn Tần 2",
    "district": "Quận 1",
    "latitude": 10.769072262419003,
    "longitude": 106.68327569961548
  },
  {
    "ID": "63ae763bbfd3d90017e8f0c4",
    "street": "Lý Thái Tổ - Nguyễn Đình Chiểu",
    "district": "Quận 3",
    "latitude": 10.766258100640426,
    "longitude": 106.67878031730652
  },
  {
    "ID": "63ae7669bfd3d90017e8f0d9",
    "street": "Khánh Hội - Cầu Kênh Tẻ",
    "district": "Quận 4",
    "latitude": 10.75287202759093,
    "longitude": 106.70217990875244
  },
  {
    "ID": "63ae768dbfd3d90017e8f0f1",
    "street": "Khánh Hội - Vĩnh Hội",
    "district": "Quận 4",
    "latitude": 10.756002524679882,
    "longitude": 106.70127868652344
  },
  {
    "ID": "63ae76afbfd3d90017e8f106",
    "street": "Khánh Hội - Đường số 41",
    "district": "Quận 4",
    "latitude": 10.757952481191817,
    "longitude": 106.69977664947508
  },
  {
    "ID": "63ae76ddbfd3d90017e8f11b",
    "street": "Khánh Hội -  Hoàng Diệu",
    "district": "Quận 4",
    "latitude": 10.759638919898903,
    "longitude": 106.69848918914795
  },
  {
    "ID": "63ae7709bfd3d90017e8f135",
    "street": "Hoàng Diệu - Đoàn Văn Bơ 1",
    "district": "Quận 4",
    "latitude": 10.763254191089795,
    "longitude": 106.7038106918335
  },
  {
    "ID": "63ae7727bfd3d90017e8f14a",
    "street": "Hoàng Diệu - Đoàn Văn Bơ 2",
    "district": "Quận 4",
    "latitude": 10.763507153048575,
    "longitude": 106.70371949672699
  },
  {
    "ID": "63ae7759bfd3d90017e8f162",
    "street": "Nguyễn Tất Thành - Cầu Khánh Hội",
    "district": "Quận 4",
    "latitude": 10.76750708579767,
    "longitude": 106.70603692531586
  },
  {
    "ID": "63ae777cbfd3d90017e8f177",
    "street": "Nguyễn Tất Thành - Đoàn Như Hài",
    "district": "Quận 4",
    "latitude": 10.766774559265741,
    "longitude": 106.70645534992218
  },
  {
    "ID": "63ae77bfbfd3d90017e8f18f",
    "street": "Nguyễn Tất Thành - Cầu Tân Thuận 2",
    "district": "Quận 4",
    "latitude": 10.757040746338014,
    "longitude": 106.717768907547
  },
  {
    "ID": "63ae7829bfd3d90017e8f1ac",
    "street": "Nguyễn Tất Thành - Cầu Tân Thuận 1",
    "district": "Quận 4",
    "latitude": 10.756434678291594,
    "longitude": 106.71935141086578
  },
  {
    "ID": "63ae7893bfd3d90017e8f1e1",
    "street": "Nguyễn Tất Thành - Lê Văn Linh",
    "district": "Quận 4",
    "latitude": 10.764345088020589,
    "longitude": 106.70734584331512
  },
  {
    "ID": "63ae78ccbfd3d90017e8f1f9",
    "street": "Trần Hưng Đạo – Nguyễn Biểu 2",
    "district": "Quận 5",
    "latitude": 10.755823338854404,
    "longitude": 106.68387651443481
  },
  {
    "ID": "63ae7903bfd3d90017e8f211",
    "street": "Hậu Giang -  Hẻm 491",
    "district": "Quận 6",
    "latitude": 10.74839230354347,
    "longitude": 106.6366696357727
  },
  {
    "ID": "63ae7938bfd3d90017e8f226",
    "street": "Quốc Lộ 1- Công ty Pouyen 3 (Cổng)",
    "district": "Quận Bình Tân",
    "latitude": 10.747085265643749,
    "longitude": 106.59547626972198
  },
  {
    "ID": "63ae7966bfd3d90017e8f240",
    "street": "Cách Mạng Tháng Tám - Tô Hiến Thành",
    "district": "Quận 10",
    "latitude": 10.782879191974121,
    "longitude": 106.6720962524414
  },
  {
    "ID": "63ae798abfd3d90017e8f255",
    "street": "Cách Mạng Tháng Tám - Bắc Hải",
    "district": "Quận 10",
    "latitude": 10.786910485131086,
    "longitude": 106.66462361812592
  },
  {
    "ID": "63ae79aabfd3d90017e8f26a",
    "street": "Cách Mạng Tháng Tám - Trường Sơn",
    "district": "Quận 10",
    "latitude": 10.78586182714333,
    "longitude": 106.66649043560028
  },
  {
    "ID": "63ae7a08bfd3d90017e8f285",
    "street": "Ba Tháng Hai - Lê Hồng Phong 1",
    "district": "Quận 10",
    "latitude": 10.771095913066636,
    "longitude": 106.67326569557189
  },
  {
    "ID": "63ae7a26bfd3d90017e8f29a",
    "street": "Ba Tháng Hai - Lê Hồng Phong 2",
    "district": "Quận 10",
    "latitude": 10.77113807231056,
    "longitude": 106.672922372818
  },
  {
    "ID": "63ae7a50bfd3d90017e8f2b2",
    "street": "Ba Tháng Hai – Sư Vạn Hạnh",
    "district": "Quận 10",
    "latitude": 10.769778433720619,
    "longitude": 106.67083024978636
  },
  {
    "ID": "63ae7a74bfd3d90017e8f2c7",
    "street": "Tô Hiến Thành – Sư Vạn Hạnh",
    "district": "Quận 10",
    "latitude": 10.777894014884904,
    "longitude": 106.66554093360901
  },
  {
    "ID": "63ae7a9cbfd3d90017e8f303",
    "street": "Điện Biên Phủ – Cao Thắng",
    "district": "Quận 10",
    "latitude": 10.772729579451791,
    "longitude": 106.67909145355225
  },
  {
    "ID": "63ae7af4bfd3d90017e8f32c",
    "street": "Ba Tháng Hai - Lý Thường Kiệt 2",
    "district": "Quận 11",
    "latitude": 10.763612553802075,
    "longitude": 106.65956497192383
  },
  {
    "ID": "63ae7b3cbfd3d90017e8f34d",
    "street": "Ba Tháng Hai - Lý Thường Kiệt 3",
    "district": "Quận 10",
    "latitude": 10.764461028525057,
    "longitude": 106.65981709957123
  },
  {
    "ID": "63ae7be0bfd3d90017e8f3a8",
    "street": "Ba Tháng Hai - Lê Đại Hành 1",
    "district": "Quận 11",
    "latitude": 10.762152750086269,
    "longitude": 106.65719926357269
  },
  {
    "ID": "63ae7c12bfd3d90017e8f3c0",
    "street": "Ba Tháng Hai - Lê Đại Hành 2",
    "district": "Quận 11",
    "latitude": 10.762142209961533,
    "longitude": 106.65659844875336
  },
  {
    "ID": "63ae7c53bfd3d90017e8f3d8",
    "street": "Lý Thường Kiệt - Tô Hiến Thành 1",
    "district": "Quận 10",
    "latitude": 10.770495143199618,
    "longitude": 106.65833652019501
  },
  {
    "ID": "63ae7c73bfd3d90017e8f3ed",
    "street": "Lý Thường Kiệt - Tô Hiến Thành 2",
    "district": "Quận 11",
    "latitude": 10.770811338015845,
    "longitude": 106.65800392627716
  },
  {
    "ID": "63ae7cd3bfd3d90017e8f408",
    "street": "Lạc Long Quân - Ông Ích Khiêm",
    "district": "Quận 6",
    "latitude": 10.766700779516317,
    "longitude": 106.6426134109497
  },
  {
    "ID": "63ae7cfcbfd3d90017e8f422",
    "street": "Cách Mạng Tháng Tám – Phạm Văn Hai",
    "district": "Quận Tân Bình",
    "latitude": 10.789044677279122,
    "longitude": 106.66068077087402
  },
  {
    "ID": "63ae7d29bfd3d90017e8f437",
    "street": "Lý Thường Kiệt - Bắc Hải",
    "district": "Quận 11",
    "latitude": 10.777830777435803,
    "longitude": 106.65613174438477
  },
  {
    "ID": "63b3c274bfd3d90017e9ab93",
    "street": "Hồng Bàng - Phù Đổng Thiên Vương",
    "district": "Quận 5",
    "latitude": 10.75469551974465,
    "longitude": 106.66252076625824
  },
  {
    "ID": "63b3c2fbbfd3d90017e9abbf",
    "street": "Cầu Sài Gòn 1 (dạ cầu Bình Thạnh)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.798008997269626,
    "longitude": 106.7243792116642
  },
  {
    "ID": "63b3c59fbfd3d90017e9ace8",
    "street": "Vĩnh Lộc - Quách Điêu",
    "district": "Quận Bình Tân",
    "latitude": 10.812525059639839,
    "longitude": 106.57759666442871
  },
  {
    "ID": "63b3c9bfbfd3d90017e9b039",
    "street": "Kha Vạn Cân - Đường Số 2",
    "district": "Quận Thủ Đức",
    "latitude": 10.841883490311513,
    "longitude": 106.74685478210449
  },
  {
    "ID": "63b54898bfd3d90017ea77ae",
    "street": "Nguyễn Duy Trinh - Bưng Ông Thoàn",
    "district": "Quận 9",
    "latitude": 10.791205202047887,
    "longitude": 106.79689407348633
  },
  {
    "ID": "63b548c3bfd3d90017ea77c0",
    "street": "Nguyễn Duy Trinh - Nguyễn Thị Tư",
    "district": "Quận 9",
    "latitude": 10.792733368728047,
    "longitude": 106.80694699287415
  },
  {
    "ID": "63b54909bfd3d90017ea77e4",
    "street": "Nguyễn Duy Trinh - Võ Chí Công 2",
    "district": "Quận 9",
    "latitude": 10.790983880712217,
    "longitude": 106.79290294647217
  },
  {
    "ID": "63b54938bfd3d90017ea77f6",
    "street": "Nguyễn Duy Trinh - Lã Xuân Oai",
    "district": "Quận 9",
    "latitude": 10.805548584783494,
    "longitude": 106.81716084480286
  },
  {
    "ID": "63b54968bfd3d90017ea7808",
    "street": "Nguyễn Duy Trinh - Đỗ Xuân Hợp",
    "district": "Quận 9",
    "latitude": 10.79043584622739,
    "longitude": 106.7816162109375
  },
  {
    "ID": "63b54996bfd3d90017ea781a",
    "street": "Đỗ Xuân Hợp - Dương Đình Hội",
    "district": "Quận 9",
    "latitude": 10.81670875904515,
    "longitude": 106.77427768707275
  },
  {
    "ID": "63b549b8bfd3d90017ea782c",
    "street": "Đỗ Xuân Hợp - Tây Hòa",
    "district": "Quận 9",
    "latitude": 10.824433169045323,
    "longitude": 106.76919221878052
  },
  {
    "ID": "63b54a04bfd3d90017ea783e",
    "street": "Lê Văn Việt - Hoàng Hữu Nam",
    "district": "Quận 9",
    "latitude": 10.850207862370524,
    "longitude": 106.8136739730835
  },
  {
    "ID": "63b54a70bfd3d90017ea7862",
    "street": "Lã Xuân Oai - Đường D2",
    "district": "Quận 9",
    "latitude": 10.830049838743976,
    "longitude": 106.8044900894165
  },
  {
    "ID": "63b54a9ebfd3d90017ea7911",
    "street": "Nguyễn Xiển - Nguyễn Văn Tăng",
    "district": "Quận 9",
    "latitude": 10.842810773602949,
    "longitude": 106.82869434356688
  },
  {
    "ID": "63b54ad1bfd3d90017ea7974",
    "street": "Võ Chí Công - Liên Phường 1",
    "district": "Quận 9",
    "latitude": 10.804536877081373,
    "longitude": 106.79254353046417
  },
  {
    "ID": "63b54aedbfd3d90017ea79c3",
    "street": "Võ Chí Công - Liên Phường 2",
    "district": "Quận 9",
    "latitude": 10.804947883746554,
    "longitude": 106.7919373512268
  },
  {
    "ID": "63b54bcdbfd3d90017ea7a82",
    "street": "Tỉnh lộ 43 - KCX Linh Trung 2",
    "district": "Quận Thủ Đức",
    "latitude": 10.896082579408835,
    "longitude": 106.71809077262878
  },
  {
    "ID": "63b54c51bfd3d90017ea7aa0",
    "street": "Đường số 1 - Nguyễn Văn Bá",
    "district": "Quận Thủ Đức",
    "latitude": 10.826688279850183,
    "longitude": 106.76022827625275
  },
  {
    "ID": "63b54c93bfd3d90017ea7ab8",
    "street": "Lê Văn Chí - Linh Trung",
    "district": "Quận Thủ Đức",
    "latitude": 10.858900788285478,
    "longitude": 106.77785038948058
  },
  {
    "ID": "63b54cffbfd3d90017ea7ad0",
    "street": "Tỉnh lộ 43 - Chân cầu Gò Dưa",
    "district": "Quận Thủ Đức",
    "latitude": 10.873051276771323,
    "longitude": 106.73239231109619
  },
  {
    "ID": "63b54d27bfd3d90017ea7ae5",
    "street": "Xa lộ Hà Nội - Đường D1",
    "district": "Quận Thủ Đức",
    "latitude": 10.858194826768456,
    "longitude": 106.7877745628357
  },
  {
    "ID": "63b54d5abfd3d90017ea7afe",
    "street": "Đường số 1 - Cảng Phước Long",
    "district": "Quận Thủ Đức",
    "latitude": 10.826667204126831,
    "longitude": 106.75588846206665
  },
  {
    "ID": "63b54dcbbfd3d90017ea7ba8",
    "street": "Quốc Lộ 1 - Cổng ĐH Quốc gia TPHCM",
    "district": "Quận Thủ Đức",
    "latitude": 10.865338658847957,
    "longitude": 106.79384708404541
  },
  {
    "ID": "63b54f70bfd3d90017ea7c86",
    "street": "Cầu Sài Gòn (10)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.79856140894338,
    "longitude": 106.72627687454224
  },
  {
    "ID": "63b54fe4bfd3d90017ea7ca2",
    "street": "Nút giao Mỹ Thủy (5)",
    "district": "Quận 2",
    "latitude": 10.770168408207471,
    "longitude": 106.77514672279358
  },
  {
    "ID": "63b55020bfd3d90017ea7cb7",
    "street": "Nút giao Mỹ Thủy (6)",
    "district": "Quận 2",
    "latitude": 10.76800773240284,
    "longitude": 106.77337646484375
  },
  {
    "ID": "63b5503bbfd3d90017ea7ccc",
    "street": "Nút giao Mỹ Thủy (7)",
    "district": "Quận 2",
    "latitude": 10.769746814145492,
    "longitude": 106.77508234977722
  },
  {
    "ID": "63b65e6abfd3d90017eaa361",
    "street": "Nguyễn Thị Định - Thân Văn Nhiếp",
    "district": "Quận 2",
    "latitude": 10.790330454865765,
    "longitude": 106.75423622131348
  },
  {
    "ID": "63b65ebebfd3d90017eaa3ae",
    "street": "Nguyễn Hữu Cảnh - Ngô Tất Tố 2 (Dạ cầu Thủ Thiêm 1)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.789144799501733,
    "longitude": 106.71642780303955
  },
  {
    "ID": "63b65f33bfd3d90017eaa405",
    "street": "Nguyễn Hữu Cảnh - Ngô Tất Tố 3 (Nhánh chính cầu Thủ Thiêm 1)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.788797006374688,
    "longitude": 106.71695351600647
  },
  {
    "ID": "63b65f64bfd3d90017eaa41f",
    "street": "Xô Viết Nghệ Tĩnh - Đường D5",
    "district": "Quận Bình Thạnh",
    "latitude": 10.806818483896206,
    "longitude": 106.71161592006683
  },
  {
    "ID": "63b65f8dbfd3d90017eaa434",
    "street": "Xô Viết Nghệ Tĩnh - Phan Văn Hân (Cầu Thị Nghè)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.792743907781624,
    "longitude": 106.70740485191345
  },
  {
    "ID": "63b65fa9bfd3d90017eaa449",
    "street": "Xô Viết Nghệ Tĩnh - Nguyễn Văn Lạc",
    "district": "Quận Bình Thạnh",
    "latitude": 10.795315425807853,
    "longitude": 106.70981884002686
  },
  {
    "ID": "63b65fd8bfd3d90017eaa461",
    "street": "Lê Văn Duyệt - Vũ Huy Tấn",
    "district": "Quận Bình Thạnh",
    "latitude": 10.795652672441406,
    "longitude": 106.6960859298706
  },
  {
    "ID": "63b66008bfd3d90017eaa476",
    "street": "Ung Văn Khiêm - Nguyễn Văn Thương (D1)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.803662168715872,
    "longitude": 106.72167420387268
  },
  {
    "ID": "63b66035bfd3d90017eaa48e",
    "street": "Nơ Trang Long - Nguyễn Huy Lượng (Bệnh viện Ung Bướu)",
    "district": "Quận Bình Thạnh",
    "latitude": 10.805348351238072,
    "longitude": 106.69502377510071
  },
  {
    "ID": "63b66051bfd3d90017eaa4a3",
    "street": "Nơ Trang Long - Phan Văn Trị",
    "district": "Quận Bình Thạnh",
    "latitude": 10.811228838664457,
    "longitude": 106.69548511505126
  },
  {
    "ID": "63b66089bfd3d90017eaa4bd",
    "street": "Nơ Trang Long - Chu Văn An",
    "district": "Quận Bình Thạnh",
    "latitude": 10.811407991490512,
    "longitude": 106.69575333595276
  },
  {
    "ID": "63b660d8bfd3d90017eaa4d5",
    "street": "Cầu Tân Thuận 2 - Q7 (Q4-Q7)",
    "district": "Quận 7",
    "latitude": 10.752766623083232,
    "longitude": 106.72369122505188
  },
  {
    "ID": "63b660f8bfd3d90017eaa4ea",
    "street": "Cầu Tân Thuận 2 - Q7 (Q7-Q4)",
    "district": "Quận 7",
    "latitude": 10.752650678082237,
    "longitude": 106.72386288642883
  },
  {
    "ID": "63b661a3bfd3d90017eaa520",
    "street": "Nguyễn Tất Thành - Cảng SG (Q4-Q7)",
    "district": "Quận 4",
    "latitude": 10.75961256936665,
    "longitude": 106.7133218050003
  },
  {
    "ID": "63b664d2bfd3d90017eaaa0f",
    "street": "CT Trung Lương - Võ Trần Chí 1",
    "district": "Huyện Bình Chánh",
    "latitude": 10.685258028572397,
    "longitude": 106.57115936279295
  },
  {
    "ID": "63b664edbfd3d90017eaaa24",
    "street": "CT Trung Lương - Võ Trần Chí 2",
    "district": "Huyện Bình Chánh",
    "latitude": 10.684630731099254,
    "longitude": 106.56688392162323
  },
  {
    "ID": "63bd1e95bfd3d90017ec3cd5",
    "street": "Nguyễn Lương Bằng - Hoàng Quốc Việt",
    "district": "Quận 7",
    "latitude": 10.713110837606749,
    "longitude": 106.73168420791625
  },
  {
    "ID": "63bd1f21bfd3d90017ec3d04",
    "street": "Huỳnh Tấn Phát - Phạm Hữu Lầu",
    "district": "Quận 7",
    "latitude": 10.705204357796118,
    "longitude": 106.73766016960144
  },
  {
    "ID": "63bd1f48bfd3d90017ec3d19",
    "street": "Huỳnh Tấn Phát - Nguyễn Thị Thập",
    "district": "Quận 7",
    "latitude": 10.737524743798526,
    "longitude": 106.73035383224486
  },
  {
    "ID": "649da419a6068200171a6c90",
    "street": "Nguyễn Chí Thanh - Ngô Quyền",
    "district": "Quận 5",
    "latitude": 10.759206770879036,
    "longitude": 106.66560530662537
  },
  {
    "ID": "649da495a6068200171a6cb6",
    "street": "Mai Chí Thọ - Trần Quý Kiên (3)",
    "district": "Quận 2",
    "latitude": 10.781793631904456,
    "longitude": 106.74000978469849
  },
  {
    "ID": "649da72ca6068200171a6dbb",
    "street": "Tôn Đức Thắng - Hàm Nghi",
    "district": "Quận 1",
    "latitude": 10.77107483344246,
    "longitude": 106.70635342597961
  },
  {
    "ID": "649da77ea6068200171a6dd4",
    "street": "Tôn Đức Thắng - Công trường Mê Linh",
    "district": "Quận 1",
    "latitude": 10.77530126857797,
    "longitude": 106.70676112174988
  }
];
const DATA = { LIST_CAMERA, LIST_DISTRICT, URL };
export default DATA;