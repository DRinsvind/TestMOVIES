import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'
import logger from '../middlewares/logger'
import api from '../middlewares/api'
import local from '../middlewares/local'
import offline from '../middlewares/offline'

import {routerMiddleware} from 'react-router-redux'
import history from '../history'
// const enhancer = applyMiddleware(thunk,routerMiddleware(history))
const enhancer = applyMiddleware(thunk,api,local,offline,logger,routerMiddleware(history))
const store = createStore(reducer,{},enhancer)

window.store = store

export default store