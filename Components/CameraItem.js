
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { FlashList } from "@shopify/flash-list";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
import { Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import DATA from '../assets/data';
import { useSelector, useDispatch } from 'react-redux'
import { updateCurrentCamera } from '../redux/features/hanlderLocation'

const CameraItem = ({ objCamera }) => {

    const { currentItemSelected } = useSelector((state) => state.changeDistrict);
    const dispatch = useDispatch();
    const isSelected = currentItemSelected == objCamera.ID;

    const onPress = (event) => {
        dispatch(updateCurrentCamera(objCamera.ID))
    };
    return (
        <TouchableOpacity className={`flex flex-row bg-gray-100 p-2 m-2 rounded-xl ${isSelected ? 'bg-sky-300' : null}`}
            onPress={onPress}
        >
            <View className="w-2/6">
                <Image
                    source={DATA.URL + objCamera.ID}
                    className="w-32 h-24 rounded-xl"
                    contentFit="cover"
                    transition={1000}
                    placeholder={require('../assets/indicator.gif')}
                />
            </View>
            <View className=" px-3 w-4/6 flex space-y-2">
                <View className="flex-row  items-center">
                    <Ionicons name={isSelected ? "videocam" : "videocam-outline"} size={15} color="black" />
                    <Text className="font-bold ml-2">
                        {objCamera.street}
                    </Text>
                </View>
                <View className="flex-row  items-center">
                    <Ionicons name={isSelected ? "location" : "location-outline"} size={15} color="black" />
                    <Text className="ml-2">{objCamera.district}</Text>
                </View>
                <View className="flex-row items-center">
                    <Ionicons name={isSelected ? "golf" : "golf-outline"} size={15} color="black" />
                    <Text className="ml-2"> Cách 5 km 40 m</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CameraItem;