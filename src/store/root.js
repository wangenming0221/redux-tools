import { combineReducers } from 'redux'
import counter from './modules/counter';
import userinfo from './modules/userinfo';

const rootReducer = combineReducers({
    counter,
    userinfo,
});

export default rootReducer