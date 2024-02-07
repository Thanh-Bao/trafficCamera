
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import DropdownComponent from './Components/FilterCamera';
import MyList from './Components/ListCamera';
import CurrentCamera from './Components/CurrentCamera';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native';
// import {
//   InitializationEvents,
//   IronSource,
//   } from 'ironsource-mediation'

StatusBar.setHidden(true);

// InitializationEvents.onInitializationComplete.setListener(() =>{

//   console.log('=====>>>>>> @@@@ onInitializationComplete')
//   });
// IronSource.init("1d75bc075", ['BANNER']);
// IronSource.validateIntegration();

export default function App() {
  return (
    <SafeAreaProvider >
      <Provider store={store}>
        <View className="w-full h-full">
          {/* /////////////////////// Hiển thị camera ///////////////// */}
          <View style={{ height: "29%" }}>
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



