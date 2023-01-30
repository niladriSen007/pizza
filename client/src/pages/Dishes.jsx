import React from "react";
import { useEffect } from "react";
import Dish from "../components/Dish";
import { getProducts } from "../store/apiCalls";
import { useDispatch, useSelector } from "react-redux";
// import dishes from "../utils/pizzaData";

function Dishes() {

  const dispatch = useDispatch();

  const allPizzas = useSelector(state=>state.pizza.pizzas)

  useEffect(()=>{
    getProducts(dispatch)
  },[dispatch])

  return (
    <>
      <h2 className="text-5xl text-center font-bold pt-12 md:text-7xl">Our Dishes🍕</h2>
      <div className="flex flex-wrap gap-6  md:gap-28  px-4 md:px-24  py-10 md:py-24 items-center justify-center">
        {allPizzas?.map((dish) => (
          <div key={dish.name}>
            <Dish dish={dish} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Dishes;
