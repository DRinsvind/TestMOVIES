import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'
import logger from '../middlewares/logger'
// import {routerMiddleware} from 'react-router-redux'
// import history from '../history'
// const enhancer = applyMiddleware(thunk,routerMiddleware(history))
const enhancer = applyMiddleware(thunk,logger)
const store = createStore(reducer,{},enhancer)

window.store = store

export default store