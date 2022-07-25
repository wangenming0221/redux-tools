import { createSlice } from '@reduxjs/toolkit';

const userinfo = createSlice({
    name:'userinfo',
    initialState:{
        info:{},
    },
    reducers:{
        SET_INFO(state, action) {
            state.info = Object.assign({}, action.payload);
        },
        CLEAR_INFO(state, action) {
            state.info = {};
        },
    },
})

export const { SET_INFO, CLEAR_INFO } = userinfo.actions;

export default userinfo.reducer;