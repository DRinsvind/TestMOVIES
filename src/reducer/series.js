
import {LOAD_ITEMS_FOR_PAGE,START,SUCCESS,SERIES,ADD_FILTER,CONTENT_DEFAULT,FAIL,LOAD_ITEM_BY_ID} from '../constants'

export default (seriesState = CONTENT_DEFAULT,action)=>{
    const {type,response,payload} = action
    switch(type){
        case LOAD_ITEMS_FOR_PAGE+SERIES+START:
            return{
                ...seriesState,loading:true
            }
        case LOAD_ITEMS_FOR_PAGE+SERIES+SUCCESS:
            return{
                ...seriesState,offlineFail:false,loading:false,total_pages:response.response,pagination:{
                    ...seriesState.pagination, [response.page]:response.results
                }
            }
        case ADD_FILTER+SERIES:
            return{
                ...seriesState,pagination:{},filter:payload.filter
            }

        case LOAD_ITEMS_FOR_PAGE+SERIES+FAIL:
            return{
                ...seriesState,offlineFail:true,loading:false
            }
        case LOAD_ITEM_BY_ID+SERIES+FAIL:
            return{
                ...seriesState,offlineFail:true,singleLoading:false
            }
        case LOAD_ITEM_BY_ID+SERIES+START:
            return{
                ...seriesState,singleLoading:true
            }
        case LOAD_ITEM_BY_ID+SERIES+SUCCESS:
            return{
                ...seriesState,offlineFail:false,singleLoading:false,
                single:
                    {...seriesState.single,
                        [payload.id]:response
                    }
            }

    }
    return seriesState
}