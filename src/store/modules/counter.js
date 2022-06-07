import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    //命名空间,name值会作为action type的前缀
    name: 'counter',
    //初始化的状态数据
    initialState: {
        count: 0,
        list: []
    },
    //1.定义reducer更新状态函数 
    //2.作为组件中dispatch使用的action函数
    //3.内置了immutable.js
    reducers: {
        add(state, action) {
            state.count ++; 
        },
        sub(state){
            state.count --;
        },
        pus(state) {
            state.list.push(Math.floor(Math.random() * 100));
        },
        del(state, action) {
            state.list.splice(action.payload, 1)
        },
    },
});

//导出action函数
export const { add, sub, pus, del } = counter.actions;

//定义异步action
export const subAsync = (palload) => {
    return async(dispatch, getState) => {
        setTimeout(() => {
            dispatch(sub());
        }, 1500);
    }
};

//导出reducer,创建store
export default counter.reducer;