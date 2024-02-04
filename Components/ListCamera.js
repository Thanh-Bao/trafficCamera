
import { Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import CameraItem from './CameraItem';
import { useSelector, useDispatch } from 'react-redux';
import { updateGPS } from '../redux/features/hanlderLocation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';


const MyList = () => {
  const data = useSelector((state) => state.changeDistrict.listCamera);
  const dispatch = useDispatch();
  const { currentGPS } = useSelector((state) => state.changeDistrict);

  const updateLocation = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // ToastAndroid.show('Bạn hãy cấp quyền vị trí!', ToastAndroid.SHORT);
        return;
      }
      let { coords } = await Location.getCurrentPositionAsync({});
      dispatch(updateGPS({
        latitude: coords.latitude,
        longitude: coords.longitude
      }));
    })()
  }

  useEffect(() => {
    
    // Thiết lập interval để cập nhật vị trí mỗi 30 giây
    const intervalId = setInterval(updateLocation, 30000);

    // Hủy interval khi component bị unmount
    return () => clearInterval(intervalId);
  }, []); // Dependency array rỗng để useEffect chỉ chạy 1 lần khi mount

  return (
    <>
      {currentGPS?.latitude == null ? <View className="absolute bottom-5 right-5 z-50">
        <TouchableOpacity onPress={updateLocation} className="w-16 h-16 flex justify-center shadow-2xl rounded-full items-center bg-orange-600">
          <MaterialCommunityIcons name="crosshairs-gps" size={45} color="white" />
        </TouchableOpacity>
      </View> : null
      }
      <FlashList
        key={data[0].ID} // dòng này để reset về camera đầu tiên mỗi khi đổi quận dropdown
        keyExtractor={(_, index) => index}
        data={data}
        renderItem={({ item }) => <CameraItem objCamera={item} />}
        estimatedItemSize={data.length}
        initialScrollIndex={0}
      />
    </>
  );
};

export default MyList;