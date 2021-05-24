/* eslint-disable react/prop-types */
import React from "react";

const Bienvenida = ({ message }) => {
  return (
    <div className="w-2/5 theme flex flex-col items-center justify-center">
      <div>
        <p className="text-lg uppercase font-extralight tracking-widest">
          Bienvenido a
        </p>
        <h2 className=" text-5xl mt-6 mb-10 font-medium"> Fast&Safe Shop</h2>
        <p className="border-t-2 border-white pt-6">{message}</p>
      </div>
    </div>
  );
};

export default Bienvenida;
