
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
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native';

StatusBar.setHidden(true);


export default function App() {


  return (
    <SafeAreaProvider >
      <Provider store={store}>
        <View className="w-full h-full">
          {/* /////////////////////// Hiển thị camera ///////////////// */}
          <View style={{height: "28.5%"}}>
            <CurrentCamera />
          </View>
          {/* /////////////////////// Hiển filter ///////////////// */}
          <DropdownComponent />
          {/* /////////////////////// Hiển list ///////////////// */}
          <MyList />
        </View>
      </Provider>
    </SafeAreaProvider>
  );
}



