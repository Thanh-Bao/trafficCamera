
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { FlashList } from "@shopify/flash-list";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
import { Dimensions } from 'react-native';
import CameraItem from './CameraItem';
import DATA from '../assets/data';
import { useSelector, useDispatch } from 'react-redux'
import { updateCurrentCamera } from '../redux/handler'

const CurrentCamera = () => {
    const { currentCamera } = useSelector((state) => state.changeDistrict);
    const dispatch = useDispatch();
    return (
        <View className="">
            <Image
                className="w-full h-full bg-black object-contain"
                source={DATA.URL + currentCamera}
                contentFit="contain"
                placeholder={require('../assets/indicator.gif')}
            />
        </View>
    );
};

export default CurrentCamera;