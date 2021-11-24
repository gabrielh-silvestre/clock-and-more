import { combineReducers } from 'redux';
import time from './timeReducer';

const rootReducer = combineReducers({ time });

export default rootReducer;
