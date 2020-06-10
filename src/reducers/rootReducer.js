import { combineReducers } from 'redux'
import fetchData from './dataReducer'

export default combineReducers({
    data: fetchData
})