
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { FlashList } from "@shopify/flash-list";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
import { Dimensions } from 'react-native';
import CameraItem from './CameraItem';



const CurrentCamera = () => {
    return (
        // <View className="bg-red-600">
            <Image
            
                className="w-full h-full bg-black object-contain"
                source="https://camera.thongtingiaothong.vn/api/snapshot/56de42f611f398ec0c481280"
                contentFit="contain"
                transition={1000}
            />
        // </View>
    );
};

export default CurrentCamera;