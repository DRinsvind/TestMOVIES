// мидлвара по добычи данных оффлайн
import {START,SUCCESS,CHECK_LOCAL,LOAD_ITEMS_FOR_PAGE,FAIL,LOAD_ITEM_BY_ID,MOVIES,SERIES} from '../constants'
export default  store => next => action => {
    const {checkOffline,type,payload,...rest} = action
    if(!checkOffline) return next(action)
    var content
    switch (type){
        case LOAD_ITEMS_FOR_PAGE+MOVIES:
            content = localStorage[LOAD_ITEMS_FOR_PAGE+MOVIES+payload.page]
            if(content){
                const response = JSON.parse(content)
                return next({...action,type:type+SUCCESS,response,success:true})
            }
            return next({...action,type:type+FAIL})
        case LOAD_ITEMS_FOR_PAGE+SERIES:
            content = localStorage[LOAD_ITEMS_FOR_PAGE+SERIES+payload.page]
            if(content){
                const response = JSON.parse(content)
                return next({...action,type:type+SUCCESS,response,success:true})
            }
            return next({...action,type:type+FAIL})
        case LOAD_ITEM_BY_ID+MOVIES:
            content = localStorage[LOAD_ITEM_BY_ID+MOVIES+SUCCESS+payload.id]
            if(content){
                const response = JSON.parse(content)
                return next({...action,type:type+SUCCESS,response,success:true})
            }
            return next({...action,type:type+FAIL})
        case LOAD_ITEM_BY_ID+SERIES:
            content = localStorage[LOAD_ITEM_BY_ID+SERIES+SUCCESS+payload.id]
            if(content){
                const response = JSON.parse(content)
                return next({...action,type:type+SUCCESS,response,success:true})
            }
            return next({...action,type:type+FAIL})
        case SEARCH:
            localStorage[SEARCH+SUCCESS+payload.content+payload.search] =  JSON.stringify(response)
            if(content){
                const response = JSON.parse(content)
                return next({...action,type:type+SUCCESS,response,success:true})
            }
            return next(action)
    }

    return next(action)






}