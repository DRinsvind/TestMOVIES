export const START = 'START'
export const FINISH = 'FINISH'
export const SUCCESS ='SUCCESS'
export const LOAD_ITEMS_FOR_PAGE ='LOAD_ITEMS_FOR_PAGE'
export const FAIL = 'FAIL'
export const KEY = 'eeb92462bc7ae28483bbd5d8ab2b5445'
export const MOVIES = 'MOVIES'
export const SERIES = 'SERIES'
export const ADD_FILTER = 'ADD_FILTER'
export const LOAD_ITEM_BY_ID ='LOAD_ITEM_BY_ID'
export const SEARCH ='SEARCH'
export const LANGUAGE = navigator.language || navigator.userLanguage;
export const CONTENT_DEFAULT = {
    total_results: null,
    total_pages: null,
    loading:false,
    filter:'popularity',
    pagination:{

    },
    singleLoading:false,
    single:{

    }
}