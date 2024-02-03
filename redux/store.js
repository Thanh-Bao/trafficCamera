import { configureStore } from '@reduxjs/toolkit';
import changeDistrict from './handler'

export const store = configureStore({
  reducer: {
    changeDistrict
  },
})