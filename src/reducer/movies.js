import {LOAD_ITEMS_FOR_PAGE,START,SUCCESS,MOVIES,ADD_FILTER,CONTENT_DEFAULT,LOAD_ITEM_BY_ID} from '../constants'

export default (moviesState = CONTENT_DEFAULT,action)=>{
    const {type,response,payload} = action
    switch(type){
        case LOAD_ITEMS_FOR_PAGE+MOVIES+START:
            return{
                ...moviesState,loading:true
            }
        case LOAD_ITEMS_FOR_PAGE+MOVIES+SUCCESS:
            return{
                ...moviesState,loading:false,total_pages:response.response,pagination:{
                    ...moviesState.pagination, [response.page]:response.results
                }
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
                ...moviesState,singleLoading:false,
                single:
                    {...moviesState.single,
                        [payload.id]:response
                    }
            }

    }
    return moviesState
}