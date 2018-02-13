import {LOAD_ITEMS_FOR_PAGE,START,FAIL,SUCCESS,MOVIES,ADD_FILTER,CONTENT_DEFAULT,LOAD_ITEM_BY_ID} from '../constants'

export default (moviesState = CONTENT_DEFAULT,action)=>{
    const {type,response,payload} = action
    switch(type){
        case LOAD_ITEMS_FOR_PAGE+MOVIES+START:
            return{
                ...moviesState,loading:true
            }
        case LOAD_ITEMS_FOR_PAGE+MOVIES+SUCCESS:
            return{
                ...moviesState,offlineFail:false,loading:false,total_pages:response.response,pagination:{
                    ...moviesState.pagination, [response.page]:response.results
                }
            }
        case LOAD_ITEMS_FOR_PAGE+MOVIES+FAIL:
            return{
                ...moviesState,offlineFail:true,loading:false
            }
        case LOAD_ITEM_BY_ID+MOVIES+FAIL:
            return{
                ...moviesState,offlineFail:true,singleLoading:false
            }
        case ADD_FILTER+MOVIES:
            return{
                ...moviesState,pagination:{},filter:payload.filter
            }
        case LOAD_ITEM_BY_ID+MOVIES+START:
            return{
                ...moviesState,singleLoading:true
            }
        case LOAD_ITEM_BY_ID+MOVIES+SUCCESS:
            return{
                ...moviesState,offlineFail:false,singleLoading:false,
                single:
                    {...moviesState.single,
                        [payload.id]:response
                    }
            }

    }
    return moviesState
}