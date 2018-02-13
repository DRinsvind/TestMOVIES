import {LOAD_ITEMS_FOR_PAGE,START,SUCCESS,MOVIES,ADD_FILTER} from '../constants'


export default (searchState = [],action)=>{
    const {type,response,payload} = action
    switch(type){
        case 'SEARCH'+SUCCESS:
            return [...response.results]
    }
    return searchState
}