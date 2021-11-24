import { combineReducers } from 'redux';
import time from './timeReducer';
import chronometer from './chronometerReducer';

const rootReducer = combineReducers({ time, chronometer });

export default rootReducer;
