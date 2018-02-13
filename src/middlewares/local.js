//мидлвара по записи пришедших данных в localStorage
import {SUCCESS,LOAD_ITEMS_FOR_PAGE,MOVIES,SERIES,LOAD_ITEM_BY_ID,SEARCH} from '../constants'
export default  store => next => action => {
    const {success,type,payload,response} = action
    if(!success) return next(action)

    switch (type){
        case LOAD_ITEMS_FOR_PAGE+MOVIES+SUCCESS:
            localStorage[LOAD_ITEMS_FOR_PAGE+MOVIES+payload.page] =  JSON.stringify(response)
            return next(action)
        case LOAD_ITEMS_FOR_PAGE+SERIES+SUCCESS:
            localStorage[LOAD_ITEMS_FOR_PAGE+SERIES+payload.page] =  JSON.stringify(response)
            return next(action)
        case LOAD_ITEM_BY_ID+MOVIES+SUCCESS:
            localStorage[LOAD_ITEM_BY_ID+MOVIES+SUCCESS+payload.id] =  JSON.stringify(response)
            return next(action)
        case LOAD_ITEM_BY_ID+SERIES+SUCCESS:
            localStorage[LOAD_ITEM_BY_ID+SERIES+SUCCESS+payload.id] =  JSON.stringify(response)
            return next(action)
        case SEARCH+SUCCESS:
            localStorage[SEARCH+SUCCESS+payload.content+payload.search] =  JSON.stringify(response)
            return next(action)
    }

    return next(action)


}