import { publicRequest } from "../requestMethods"
import {getPizzasStart,getPizzasSuccess,getPizzasFailure} from "./pizzaSlice"

export const getProducts = async(dispatch) =>{
    dispatch(getPizzasStart())
    try
    {
        const res = await publicRequest.get("/products")
        dispatch(getPizzasSuccess(res.data))
    }
    catch(e)
    {
        dispatch(getPizzasFailure())
    }
}
