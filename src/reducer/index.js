import {combineReducers} from 'redux'
import movies from './movies'
import series from './series'
import search from './search'
import {routerReducer}from 'react-router-redux'
export default combineReducers({
    movies,series,search
})