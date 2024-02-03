import { configureStore } from '@reduxjs/toolkit';
import changeDistrict from './features/changeDistrict'

export const store = configureStore({
  reducer: {
    changeDistrict
  },
})