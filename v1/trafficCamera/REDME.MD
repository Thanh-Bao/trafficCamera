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

_______________________________

# Unity ads

docs is.com

Bước 1: 
 `npm i ironsource-mediation`
Bước 2: mở file android/app/build.gradle (not android/build.gradle) và thêm

```
dependencies {
    implementation "com.google.android.gms:play-services-ads-identifier:18.0.1" 
    implementation "com.google.android.gms:play-services-basement:18.0.0" 
    implementation "com.google.android.gms:play-services-appset:16.0.2" 
}
```

_______________________________

# Các lệnh khác

xóa và build lại
`cd android && gradlew clean`


