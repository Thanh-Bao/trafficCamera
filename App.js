
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect } from 'react';
import DropdownComponent from './Components/ChooseDistrict';
import MyList from './Components/ListCamera';
import CurrentCamera from './Components/CurrentCamera';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native';
import Main from "./Main";

StatusBar.setHidden(true);


export default function App() {

  return (
    <SafeAreaProvider >
      <Provider store={store}>
        <Main />
      </Provider>
    </SafeAreaProvider>
  );
}



