
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

const MyList = () => {
  return (
    <FlashList
      width="100%"
      height="100%"
      data={DATA.LIST_CAMERA}
      renderItem={({ item }) => <CameraItem objCamera={item} />}
      estimatedItemSize={200}
    />
  );
};

export default MyList;