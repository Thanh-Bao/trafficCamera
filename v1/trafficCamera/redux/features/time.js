import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    now: new Date().getTime(),
}

export const changeTime = createSlice({
    name: 'CURRENT_TIME',
    initialState,
    reducers: {
        updateTime: (state, action) => {
            state.now = new Date().getTime();
        },
    },
})

export const { updateTime } = changeTime.actions

export default changeTime.reducer