
import { Text, View, StyleSheet , FlatList} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { FlashList } from "@shopify/flash-list";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
import { Dimensions } from 'react-native';
import CameraItem from './CameraItem';
import { useSelector, useDispatch } from 'react-redux';
import { updateDistrict } from '../redux/features/hanlderLocation';

import DATA from '../assets/data';

const MyList = () => {
  const data = useSelector((state) => state.changeDistrict.listCamera);
  const dispatch = useDispatch();

  return (
      <FlashList
        key={data[0].ID} // dòng này để reset về camera đầu tiên mỗi khi đổi quận dropdown
        keyExtractor={(_,index)=> index}
        data={data}
        renderItem={({ item }) => <CameraItem objCamera={item} />}
        estimatedItemSize={data.length}
        initialScrollIndex={0}
      />
  );
};

export default MyList;