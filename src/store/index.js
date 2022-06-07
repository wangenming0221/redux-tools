/**
 * 创建store
 */
import { configureStore } from "@reduxjs/toolkit";
import counter from './modules/counter';

const store = configureStore({
    reducer:{
        counter
    }
});

export default store;