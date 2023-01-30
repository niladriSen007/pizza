import React from "react";
import { useState } from "react";
import ShowPopup from "./ShowPopup";

const Dish = ({ dish }) => {
  const [pizzaDesc, setPizzaDesc] = useState({
    size: "small",
    count: 0,
  });

  const handlePizzaChange = (e) => {
    setPizzaDesc((prevPizzaDesc) => {
      return {
        ...prevPizzaDesc,
        [e.target.name]: e.target.value,
      };
    });
  };

  // console.log(pizzaDesc);

  const [showPopup,setShowPopup]= useState(false)
  const handleShow = () =>{
    setShowPopup(!showPopup)
  }

  return (
    <div className="w-60  px-4 py-8 shadow-2xl" >
      {showPopup && <ShowPopup dish={dish} handleShow={handleShow}/>}
      <img src={dish.image} alt={dish.name} className="w-60 h-60 rounded-sm" onClick={handleShow}/>
      <div className="flex justify-between items-center py-2">
        <p className="font-bold">{dish.name}</p>
        <p>{dish.category}</p>
      </div>
      <p className="text-gray-500 py-2 font-thin">{dish.description}</p>
      <div className="flex gap-12 pt-6">
        <div>
          <p className="font-bold">Varients</p>
          <select onChange={(e) => handlePizzaChange(e)} name="size">
            {dish.varients.map((varient) => (
              <option key={varient} value={varient}>{varient}</option>
            ))}
          </select>
        </div>
        <div>
          <p className="font-bold">Quantity</p>
          <select onChange={(e) => handlePizzaChange(e)} name="count">
            {[...Array(11).keys()].map((elem, ind) => (
              <option key={elem} value={ind }>{elem }</option>
            ))}
          </select>
        </div>
      </div>
      <div className="py-3">
        <span className="font-bold">Price :   ₹ {Number.parseInt(pizzaDesc?.count) *( dish.prices[0][(pizzaDesc.size)])} </span>
      </div>
      <button className="bg-red-700 text-white text-center px-3 py-1 rounded-md">
        Order Now
      </button>
    </div>
  );
};

export default Dish;
