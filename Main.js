
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect } from 'react';
import DropdownComponent from './Components/ChooseDistrict';
import MyList from './Components/ListCamera';
import CurrentCamera from './Components/CurrentCamera';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateTime } from './redux/features/time';

StatusBar.setHidden(true);


export default function App() {

    const now = useSelector((state) => state.changeTime);
    const dispatch = useDispatch();

    useEffect(() => {
        // Thiết lập một interval để thực hiện một hành động mỗi 5000ms (5 giây)
        const intervalId = setInterval(() => {
            dispatch(updateTime());
        }, 5000);

        // Xóa interval khi component unmount
        return () => clearInterval(intervalId);
    }, []); // [] đảm bảo useEffect chỉ chạy một lần khi component được tạo

    return (
        <View className="w-full h-full">
            {/* /////////////////////// Hiển thị camera ///////////////// */}
            <View style={{ height: "28.5%" }}>
                <CurrentCamera />
            </View>
            {/* /////////////////////// Hiển filter ///////////////// */}
            <DropdownComponent />
            {/* /////////////////////// Hiển list ///////////////// */}
            <MyList />
        </View>
    );
}



