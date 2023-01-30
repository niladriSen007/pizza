import {createSlice} from "@reduxjs/toolkit"

const pizzaSlice = createSlice({
    name:"pizzas",
    initialState:{
        pizzas:[],
        isFetching:false,
        isError:false,
    },
    reducers:{
        getPizzasStart(state){
            state.isFetching = true;
        },
        getPizzasSuccess(state,action){
            state.isFetching = false;
            state.pizzas = action.payload;
        },
        getPizzasFailure(state){
            state.isFetching = false;
            state.isError = true;
        }
    }
})

export const {getPizzasStart,getPizzasSuccess,getPizzasFailure} = pizzaSlice.actions;

export default pizzaSlice.reducer;