import axios from "axios";
export const GET_PROD='get/prod'
export const GET_PROD_SUCC= 'get/prod/succ'
export const GET_PROD_ERR= 'get/prod/err'


export const getProdctsApi=()=>async(dispatch)=>{
        dispatch({type:GET_PROD});
        try {
            const res= await axios('./assets/products.json')
            dispatch({type:GET_PROD_SUCC,payload:res.data.products})
        } catch (error) {
        dispatch({type:GET_PROD_ERR});
        }
}