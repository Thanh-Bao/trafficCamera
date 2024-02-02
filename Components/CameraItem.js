
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { FlashList } from "@shopify/flash-list";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
import { Dimensions } from 'react-native';


const CameraItem = ({objCamera}) => {
    return (
        <View className="flex flex-row bg-gray-100 p-2 m-2 rounded-xl">
            <View>
                <Image
                    source="https://picsum.photos/seed/696/3000/2000"
                    className="w-40 h-24 rounded-xl"
                    contentFit="cover"
                    transition={1000}
                />
            </View>
            <View className="p-3">
                <View><Text>{objCamera.street}</Text></View>
                <View><Text>{objCamera.district}</Text></View>
                <View><Text>5 km 40 m</Text></View>
            </View>
        </View>
    )
}

export default CameraItem;