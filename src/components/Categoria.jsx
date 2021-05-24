/* eslint-disable react/prop-types */
import React from "react";
import Producto from "./Producto";
import box from "../img/box.png";
import { useLocation } from "react-router";

const Categoria = () => {
  const { nameCategory } = useLocation().state;
  return (
    <section className="mt-8 ml-8">
      <h2 className="text-blueGray-900 text-3xl">{nameCategory}</h2>
      <section className="flex flex-row justify-around pt-6">
        <Producto img={box} />

        <Producto img={box} />

        <Producto img={box} />

        <Producto img={box} />

        <Producto img={box} />
      </section>
    </section>
  );
};

export default Categoria;
