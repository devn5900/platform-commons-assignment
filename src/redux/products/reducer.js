import { GET_PROD, GET_PROD_ERR, GET_PROD_SUCC } from "./action"

const init={
    isLoad:false,
    isErr:false,
    data:[]
}


export const reducer= (state=init,{type,payload})=>{

    switch(type){
        case GET_PROD:
            return {...state,isLoad:true}
        case GET_PROD_SUCC:
            return {...state,isLoad:false,isErr:false,data:payload}
        case GET_PROD_ERR:
            return {...state,isLoad:false,isErr:true}
        default:return state
    }
}