import { combineReducers } from 'redux';
import leadsReducer from './leads'
import errorsReducer from './errors'
import messageReducer from './message'

// 2
export default combineReducers({
    leadsReducer,
    errorsReducer,
    messageReducer
});