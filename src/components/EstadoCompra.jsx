import React from "react";
import NumberFormat from "react-number-format";
import { Link, useLocation } from "react-router-dom";
import Direccion from "./Direccion";
import ProductoComprar from "./ProductoComprar";

const EstadoCompra = () => {
  const { productos, estado, total, fechaEntrega, metodoPago } =
    useLocation().state;
  const opcion = estado === "En camino" ? "Cancelado" : "";

  return (
    <section className="flex flex-row py-6 px-8 h-4/5 text-blueGray-900">
      <div className="w-4/5 mr-8">
        <strong className="text-2xl font-semibold">Resumen de compra</strong>
        <div className="border border-blueGray-400 mt-6 bg-blueGray-100">
          <Direccion modificar={false} />

          <div className="w-1/2 px-4 py-4">
            <h2 className="text-lg font-semibold ">Método de pago</h2>
            <div className="flex flex-row justify-between items-center mt-6">
              <span className="text-blue-600 text-xl ml-8">
                <i className="far fa-credit-card"></i>
              </span>
              <div>
                <em>{metodoPago.metodo}</em>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-blueGray-400 px-4 py-4 mt-8 bg-blueGray-100">
          <h2 className=" text-green-800 text-lg font-semibold mb-6">
            Fecha de entrega: {fechaEntrega}
          </h2>
          <div>
            {productos.map(
              ({
                id,
                nombreProducto,
                precioProducto,
                imgProducto,
                cantidad,
              }) => (
                <ProductoComprar
                  key={id}
                  nombre={nombreProducto}
                  precio={precioProducto}
                  img={imgProducto}
                  cantidad={cantidad}
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around w-1/5 border border-blueGray-400 p-4 h-full mt-14 bg-blueGray-100">
        <Link
          to={{
            pathname: "/mis-pedidos",
            state: {
              opcion,
            },
          }}
          className="button theme px-4 text-base mb-4"
        >
          <p>Devolver producto</p>
        </Link>

        <strong className="border-t-2 border-blueGray-500 text-xl pt-2 mt-2">
          Total :
          <NumberFormat
            value={total}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
            className="text-red-800 text-2xl ml-2"
          />
        </strong>
      </div>
    </section>
  );
};
export default EstadoCompra;
