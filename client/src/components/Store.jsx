import React from "react";
import { AiFillStar, AiFillPhone } from "react-icons/ai";
import { BiCurrentLocation, BiTimeFive } from "react-icons/bi";
const Store = ({ store }) => {
  return (
    <div className="w-72">
      <div className="bg-red-600 text-white p-2 my-2">
        <p>{store.name}</p>
        <div className="flex gap-1 items-center">
          <p>{store.star}</p>
          <div className="flex text-yellow-300">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>({store.review})</p>
        </div>
      </div>
      <div className="flex gap-1 items-center py-2">
        <BiCurrentLocation size={24}/>
        <p className="text-sm">{store.address}</p>
      </div>
      <div className="flex gap-1 items-center py-2">
        <AiFillPhone />
        <p className="text-sm">{store.phone}</p>
      </div>
      <div className="flex gap-1 items-center ">
        <BiTimeFive />
        <p className="text-sm">{store.time}</p>
      </div>
      <div className="flex justify-between my-2 border gap-4">
        <button className="text-red p-2  ">Call</button><button  className="text-red p-2 ">Navigate</button><button  className="text-white bg-red-600  rounded-sm px-2 py-1 flex-1">Order</button>
      </div>
    </div>
  );
};

export default Store;
