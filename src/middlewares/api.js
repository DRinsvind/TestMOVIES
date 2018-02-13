//Мидлвара для обращения к themoviedb в случаи успеха данные будут записаны localStorage
//если же нет, то мы отправим наш запрос на возмождность добычи данных из офлайна в
//offline мидлваре
import {START,SUCCESS,FAIL} from '../constants'
export default  store => next => action => {
    const {callAPI,type,...rest} = action
    if(!callAPI) return next(action)

    next({
        ...rest,type:type+START
    })

    return fetch(callAPI)
        .then(res=>res.json()
        )
        .then(response=>{
            return next({...action,type:type+SUCCESS,response,success:true})
        })
        .catch(error=>next({...action,type:type,checkOffline:true}))


}