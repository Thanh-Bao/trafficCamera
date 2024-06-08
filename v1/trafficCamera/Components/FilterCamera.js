
import { Text, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';
import DATA from '../data';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux'
import { updateDistrict, updateCameraFromStreet } from '../redux/features/hanlderLocation'

const data = DATA.LIST_DISTRICT.map(item => ({
  label: item, value: item
}));

const DropdownComponent = () => {
  const [isFocus, setIsFocus] = useState(false);
  const value = useSelector((state) => state.changeDistrict.currentDistrictState);
  const dispatch = useDispatch();

  const renderLabel = (text) => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          {text}
        </Text>
      );
    }
    return null;
  };

  return (
    <View className="flex flex-row w-full">
      <View className="w-1/2" style={styles.container}>
        {renderLabel("Lọc theo quận")}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Lọc theo quận' : ''}
          searchPlaceholder="Nhập quận muốn tìm"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            dispatch(updateDistrict(item))
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign name="filter" size={20} color="black" />
          )}
        />
      </View>
      <View className="w-1/2" style={styles.container}>
        {renderLabel("Tìm theo tên đường")}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={DATA.LIST_CAMERA.map(({ street }) => {
            return ({
              label: street, value: street
            })
          })}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Nhập tên đường' : ''}
          searchPlaceholder="Tìm theo tên đường"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            dispatch(updateCameraFromStreet(item))
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <Ionicons name="search" size={20} color="black" />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 8,
    paddingTop: 15
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default DropdownComponent;