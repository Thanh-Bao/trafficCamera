
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { FlashList } from "@shopify/flash-list";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
import { Dimensions } from 'react-native';
import DropdownComponent from './Components/ChooseDistrict';
import MyList from './Components/ListCamera';
import CurrentCamera from './Components/CurrentCamera';



export default function App() {

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <SafeAreaProvider >
      <View className="w-full h-full">
        {/* /////////////////////// Hiển thị camera ///////////////// */}
        <View className="h-1/3"> 
          <CurrentCamera/>
        </View>
        {/* /////////////////////// Hiển filter ///////////////// */}
        <DropdownComponent />
        {/* /////////////////////// Hiển list ///////////////// */}
        <MyList />
      </View>
    </SafeAreaProvider>
  );
}



