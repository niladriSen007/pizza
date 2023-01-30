import React from "react";
import {GiCrossMark} from "react-icons/gi"

const ShowPopup = ({ dish,handleShow }) => {

  let array =Object.keys(dish.prices[0]);
  
console.log('Current scroll from the top: ' + window.pageYOffset);  

  return (
    <div className="w-full h-full  top-0 left-0 bg-[#000000a7] flex items-center justify-center z-50 py-3 fixed">
      <div
        className="flex flex-col gap-6 relative bg-white p-3 px-4 w-[300px] h-[420px]  md:w-[400px] md:h-[530px]"
      >
        <GiCrossMark className="absolute right-5 cursor-pointer" onClick={handleShow}/>
        <div className="flex items-center justify-center">
          <img
            className="w-[200px] md:w-[300px] h-[180px] md:h-[300px] "
            src={dish?.image}
            alt={dish?.name}
          />
        </div>
        <div className="px-8 pb-3">
          <div className="flex justify-between items-center">
            <p className="text-md md:text-xl font-bold leading-none">{dish.name}</p>
            <p className="text-gray-900 font-bold">({dish.category})</p>
          </div>
          <p className="text-gray-500 py-2 md:text-base text-sm  leading-tight">{dish.description}</p>
         {
          array.map(pr=>(
            <p className="font-bold">{pr[0].toUpperCase()}{pr.slice(1,pr.length).toLowerCase()}  :  ₹<span className="font-light">{dish.prices[0][pr]}</span></p>
          ))
         }
        </div>
      </div>
    </div>
  );
};

export default ShowPopup;
