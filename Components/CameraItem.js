
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import DATA from '../data';
import { useSelector, useDispatch } from 'react-redux'
import { updateCurrentCamera } from '../redux/features/hanlderLocation'
import { distanceHaversine, formatKilometers } from '../Util';

const CameraItem = ({ objCamera }) => {

    const { currentItemSelected } = useSelector((state) => state.changeDistrict);
    const { listCamera } = useSelector((state) => state.changeDistrict);
    const { currentGPS } = useSelector(state => state.changeDistrict);

    const dispatch = useDispatch();
    const isSelected = currentItemSelected == objCamera.ID;

    const onPress = (event) => {
        if (listCamera.length > 1) {
            dispatch(updateCurrentCamera(objCamera.ID))
        }
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
            <View className=" px-3 w-4/6 flex justify-between">
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
                    {currentGPS?.latitude ?
                        <Text> Cách: {formatKilometers(distanceHaversine(currentGPS.latitude, objCamera.latitude, currentGPS.longitude, objCamera.longitude))}</Text> :
                        <Text className="text-orange-400"> chưa cấp quyền vị trí</Text>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CameraItem;