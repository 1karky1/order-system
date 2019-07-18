import { combineReducers } from 'redux'
import calendarsView from './calendarsView'
import eventView from './eventView'


const reducers = combineReducers({calendarsView, eventView});

export default reducers