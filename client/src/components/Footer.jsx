import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-600  pb-12 bottom-0 ">
      <div className="w-full md:h-60 flex flex-col gap-12  md:flex-row items-start justify-start md:justify-between px-8 md:px-24 py-12  text-white mt-24">
        <div>
          <p className="text-3xl md:text-5xl font-bold">Pominozz.</p>
        </div>
        <div className="flex flex-col gap-3 text-lg md:text-xl items-start">
          <p>Products</p>
          <p>Pizza</p>
          <p>Swarma Roll</p>
          <p>Burger</p>
        </div>
        <div className="flex flex-col gap-3 text-lg md:text-xl items-start">
          <p>Contacts</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      <button className="bg-white p-3 rounded-full text-red-800 ">Register Here</button>
      </div>
    </footer>
  );
};

export default Footer;
