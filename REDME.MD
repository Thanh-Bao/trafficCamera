AES build apk preview (build trên server của expo => tải apk từ web)

`eas build -p android --profile preview`

Debug trên máy ảo android (không tạo thư mục android, IOS)

`npx expo start --clear`

Để tạo thư mục android ở local

`npx expo prebuild --clean`

Build thành file .aab ở local

`npx react-native build-android --mode=release`

Build thành .aab trên expo cloud

`eas build --platform android`


