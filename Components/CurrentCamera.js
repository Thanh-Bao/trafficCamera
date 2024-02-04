
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import DATA from '../assets/data';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentTime } from '../Util';
import Clock from './Clock';
import Countdown from "./Countdown";

const CurrentCamera = () => {
    const { currentCamera } = useSelector((state) => state.changeDistrict);
    const { now } = useSelector((state) => state.changeTime);
    // Image.clearMemoryCache();
    Image.clearDiskCache();
    return (
        <View>
            <Image
                key={now}
                className="w-full h-full bg-black object-contain"
                source={DATA.URL + currentCamera}
                contentFit="contain"
                placeholder={require('../assets/indicator.gif')}
            />
            <View className="absolute top-0 w-full bg-black flex-row px-3 pt-0 pb-0.5 justify-between">
                <Text className="text-xs text-white">{DATA.LIST_CAMERA.find(cam => cam.ID == currentCamera).street}</Text>
                <Clock />
            </View>
            <View className="absolute bottom-1 w-full pl-1 pr-2 pt-0 pb-0 justify-between">
                <Countdown />
            </View>
        </View>
    );
};

export default CurrentCamera;