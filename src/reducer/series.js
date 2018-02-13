import {LOAD_ITEMS_FOR_PAGE,START,SUCCESS,SERIES,ADD_FILTER,CONTENT_DEFAULT} from '../constants'

export default (seriesState = CONTENT_DEFAULT,action)=>{
    const {type,response,payload} = action
    switch(type){
        case LOAD_ITEMS_FOR_PAGE+SERIES+START:
            return{
                ...seriesState,loading:true
            }
        case LOAD_ITEMS_FOR_PAGE+SERIES+SUCCESS:
            return{
                ...seriesState,loading:false,total_pages:response.response,pagination:{
                    ...seriesState.pagination, [response.page]:response.results
                }
            }
        case ADD_FILTER+SERIES:
            return{
                ...seriesState,pagination:{},filter:payload.filter
            }

    }
    return seriesState
}