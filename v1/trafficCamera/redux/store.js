import { configureStore } from '@reduxjs/toolkit';
import changeDistrict from './features/hanlderLocation'
import changeTime from './features/time';

export const store = configureStore({
  reducer: {
    changeDistrict,
    changeTime,
    changeDistrict
  },
})