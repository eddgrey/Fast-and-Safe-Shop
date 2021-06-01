/* eslint-disable react/prop-types */
import React, { useContext } from "react";
// import Producto from "./Producto";
// import box from "../img/box.png";
import { useLocation } from "react-router";
import { productosContext } from "../context/ProductosContext";
import Producto from "./Producto";

const Categoria = () => {
  const { nameCategory } = useLocation().state;
  const { productos } = useContext(productosContext);
  return (
    <section className="mt-8 ml-8">
      <h2 className="text-blueGray-900 text-3xl">{nameCategory}</h2>
      <section className="flex flex-row justify-around pt-6">
        {productos
          .filter(({ categoriaProducto }) => categoriaProducto === nameCategory)
          .map(({ nombreProducto, precioProducto, imgProducto }, i) => (
            <Producto
              key={i}
              nombreProducto={nombreProducto}
              precioProducto={precioProducto}
              imgProducto={imgProducto}
            />
          ))}
      </section>
    </section>
  );
};

export default Categoria;
