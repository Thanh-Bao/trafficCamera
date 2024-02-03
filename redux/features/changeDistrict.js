import { createSlice } from '@reduxjs/toolkit'
import DATA from '../../assets/data'

const initialState = {
    currentDistrictState: null,
    listCamera: DATA.LIST_CAMERA
}

export const changeDistrict = createSlice({
    name: 'CURRENT_DISTRICT',
    initialState,
    reducers: {
        updateDistrict: (state, action) => {
            state.currentDistrictState = action.payload;
            state.listCamera = DATA.LIST_CAMERA.filter(item => item.district == action.payload.value);
        },
    },
})

export const { updateDistrict } = changeDistrict.actions

export default changeDistrict.reducer