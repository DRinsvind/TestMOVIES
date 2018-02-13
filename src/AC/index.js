import {LOAD_ITEMS_FOR_PAGE,KEY,MOVIES,SERIES,ADD_FILTER,LANGUAGE,SEARCH,LOAD_ITEM_BY_ID} from '../constants'
import {push,replace} from 'react-router-redux'
function getApiContent(content){
    if (content === MOVIES.toLowerCase()) {
        return 'movie'
    } else {
        return 'tv'
    }
}
export function loadItemById(content,id) {
    return (dispatch, getState) => {
        if(+id!==+id) return dispatch(replace('/404'))
        let apiContent = getApiContent(content)
        const {[content]:{single,singleLoading}}=getState()
        if(single[id]||singleLoading) return
        dispatch({
            type: LOAD_ITEM_BY_ID+content.toUpperCase(),
            payload: {id},
            callAPI: `http://api.themoviedb.org/3/${apiContent}/${id}?api_key=${KEY}&language=${LANGUAGE}`
        })
    }
}
export function searchFunction(content,search) {
    return (dispatch, getState) => {
        let apiContent = getApiContent(content)
        dispatch({
            type: SEARCH,
            payload: {search,content},
            callAPI: `http://api.themoviedb.org/3/search/${apiContent}?api_key=${KEY}&language=${LANGUAGE}&query=${search}`
        })
    }
}
export function changeFilter(content,newFilter){
    return (dispatch, getState) => {
        const {[content]:{filter,loading}}=getState()
        if(loading||filter===newFilter) return

        dispatch({
            type: ADD_FILTER+content.toUpperCase(),
            payload:{
                filter:newFilter
            }
        })
    }
}
export function checkAndLoadItemsForPage(content,page) {
    return (dispatch, getState) => {
        if(+page!==+page) return dispatch(replace('/404'))
        const {[content]:{pagination,total_pages,loading,filter,offlineFail}}=getState()
        if(total_pages!==null && page>=total_pages)return dispatch(replace('/404'))
        if(!offlineFail &&(loading||pagination[page])) return

        let apiContent = getApiContent(content),filterContent=''
        if(filter){
            if(filter.now){
                //Я не совсем понял фильтр "Сейчас в прокате" так как подобного в апи я не нашел, потому
                //я просто взял промежуток дата выхода фильма/сериала - 2 недели, как бы имитация того что фильм/сериал
                //актуальный на данный момент, если поясните этот пункт то спокойно переделаю
                let early = content==='movies'?'primary_release_date.gte=':'first_air_date.gte='
                let now = content==='movies'?'primary_release_date.lte=':'first_air_date.lte='
                filterContent = early+(filter.now-1000*60*60*24*14)+'&'+now+filter.now+'&'
            }else{
                filterContent='sort_by='+filter+'.desc&'
            }
        }
        dispatch({
            type: LOAD_ITEMS_FOR_PAGE+content.toUpperCase(),
            payload: {page},
            callAPI: `http://api.themoviedb.org/3/discover/${apiContent}?page=${page}&api_key=${KEY}&${filterContent}language=${LANGUAGE}`
        })
    }
}