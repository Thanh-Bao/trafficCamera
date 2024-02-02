
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { FlashList } from "@shopify/flash-list";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
import { Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


const CameraItem = ({ objCamera }) => {
    return (
        <View className=" flex flex-row bg-gray-100 p-2 m-2 rounded-xl">
            <View className="w-2/6">
                <Image
                    source="https://picsum.photos/seed/696/3000/2000"
                    className="w-32 h-24 rounded-xl"
                    contentFit="cover"
                    transition={1000}
                />
            </View>
            <View className=" px-3 w-4/6 flex space-y-2">
                <View className="flex-row  items-center">
                    <Ionicons name="videocam-outline" size={15} color="black" />
                    <Text className="font-bold ml-2">
                        {objCamera.street}
                    </Text>
                </View>
                <View className="flex-row  items-center">
                    <Ionicons name="location-outline" size={15} color="black" />
                    <Text className="ml-2">{objCamera.district}</Text>
                </View>
                <View className="flex-row items-center">
                    <Ionicons name="golf-outline" size={15} color="black" />
                    <Text className="ml-2"> Cách 5 km 40 m</Text>
                </View>
            </View>
        </View>
    )
}

export default CameraItem;