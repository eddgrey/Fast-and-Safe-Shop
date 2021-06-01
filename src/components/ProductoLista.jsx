/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ProductoLista = ({
  nombreProducto,
  precioProducto,
  imgProducto,
  tipoProducto,
}) => {
  return (
    <section className="border-b border-blueGray-400 py-8 w-full">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row w-1/2">
          <img src={imgProducto} alt="box" className=" w-14"></img>
          <div className="ml-4">
            <em className="text-lg font-medium">{nombreProducto}</em>
            <p className=" text-green-800 font-semibold text-base">
              {tipoProducto === "carrito" ? "Costo de envío" : ""}
            </p>
          </div>
        </div>
        {tipoProducto === "carrito" ? (
          <>
            <div className="flex flex-col items-center w-1/4">
              <div className="border border-blueGray-400 flex flex-row items-center mb-4">
                <input
                  className="bg-white h-full w-20 text-xl text-center"
                  type="number"
                  defaultValue="1"
                ></input>
              </div>
              <p className="text-sm">Cantidad</p>
            </div>
            <p className="text-2xl font-medium">${precioProducto}</p>
          </>
        ) : tipoProducto === "pedido" ? (
          <p className="text-lg text-green-700 font-semibold">
            {precioProducto === "12,499" ? "En camino " : "Entregado"}
          </p>
        ) : null}
      </div>
      <div className="flex flex-row w-1/2 justify-around text-blue-700 pt-6 pl-10">
        {tipoProducto === "carrito" || tipoProducto === "vender" ? (
          <button onClick={console.log("fds")}>Eliminar</button>
        ) : null}
        {tipoProducto === "pedido" ? (
          <Link
            to={{
              pathname: "/estado-compra",
              state: {
                nombreProducto,
                precioProducto,
                imgProducto,
                estado:
                  precioProducto === "12,499" ? "En camino " : "Entregado",
              },
            }}
          >
            <p>Ver más</p>
          </Link>
        ) : tipoProducto === "vender" ? (
          <p>Ver más</p>
        ) : null}
      </div>
    </section>
  );
};

export default ProductoLista;
