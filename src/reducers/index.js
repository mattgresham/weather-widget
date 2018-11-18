// @flow
import { combineReducers } from 'redux';
import weatherWidget from './weatherWidget';

// Combine all reducers for a central index of reducers
const reducers = combineReducers({ weatherWidget });

export default reducers;
