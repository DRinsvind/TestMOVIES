import {START,SUCCESS,FAIL} from '../constants'
export default  store => next => action => {
    const {callAPI,type,...rest} = action
    if(!callAPI) return next(action)

    next({
        ...rest,type:type+START
    })

        fetch(callAPI)
            .then(res=>res.json())
            .then(response=>{
                return next({...action,type:type+SUCCESS,response})
            })
            .catch(error=>next({...action,type:type+FAIL,error}))



}