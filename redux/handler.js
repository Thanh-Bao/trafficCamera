import { createSlice } from '@reduxjs/toolkit'
import DATA from '../assets/data'

const initialState = {
    currentDistrictState: null,
    listCamera: DATA.LIST_CAMERA,
    currentItemSelected: null,
    currentCamera: DATA.LIST_CAMERA[DATA.LIST_CAMERA.length - 1].ID
}

export const changeDistrict = createSlice({
    name: 'CURRENT_DISTRICT',
    initialState,
    reducers: {
        updateDistrict: (state, action) => {
            state.currentItemSelected = null;
            state.currentDistrictState = action.payload;
            state.listCamera = DATA.LIST_CAMERA.filter(item => item.district == action.payload.value);
            state.currentCamera = state.listCamera[state.listCamera.length-1].ID;
        },
        updateCurrentCamera: (state, action) => {
            state.currentItemSelected = action.payload;
            state.currentCamera = action.payload;
        }
    },
})

export const { updateDistrict, updateCurrentCamera } = changeDistrict.actions

export default changeDistrict.reducer