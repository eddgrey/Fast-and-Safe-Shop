/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { useCarrito } from "../context/CarritoContext";

const ProductoLista = ({
  nombreProducto,
  precioProducto,
  precioEnCarrito,
  cantidadProducto,
  imgProducto,
  tipoProducto,
  id,
}) => {
  const [cantidad, setCantidad] = useState(cantidadProducto);
  const { productosEnCarrito, setProductosEnCarrito, calcularTotalCarrito } =
    useCarrito();

  const eliminarDeCarrito = (idEliminar) => {
    setProductosEnCarrito(
      productosEnCarrito.filter((producto) => producto.id !== idEliminar)
    );
  };

  useEffect(() => {
    const newProductos = productosEnCarrito.map((producto) => {
      if (producto.id === id) {
        return {
          ...producto,
          precioProducto: parseInt(precioProducto) * parseInt(cantidad, 10),
          cantidad: cantidad,
        };
      } else {
        return producto;
      }
    });

    setProductosEnCarrito(newProductos);
  }, [cantidad]);

  useEffect(() => {
    calcularTotalCarrito();
  }, [productosEnCarrito]);

  return (
    <section className="border-b border-blueGray-400 py-8 w-full">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row w-1/2">
          <img src={imgProducto} alt="box" className=" w-14"></img>
          <div className="ml-4">
            <em className="text-lg font-medium">{nombreProducto}</em>
            {/* <p className=" text-green-800 font-semibold text-base">
              {tipoProducto === "carrito" ? "Costo de envío" : ""}
            </p> */}
          </div>
        </div>
        {tipoProducto === "carrito" ? (
          <>
            <div className="flex flex-col items-center w-1/4">
              <div className="border border-blueGray-400 flex flex-row items-center mb-4">
                <input
                  className="bg-white h-full w-20 text-xl text-center"
                  type="number"
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value)}
                  min={1}
                  max={40}
                ></input>
              </div>
              <p className="text-sm">Cantidad</p>
            </div>
            <NumberFormat
              value={precioEnCarrito}
              displayType="text"
              thousandSeparator={true}
              prefix="$"
              className="text-2xl font-medium"
            />
          </>
        ) : tipoProducto === "pedido" ? (
          <p className="text-lg text-green-700 font-semibold">
            {precioProducto === "12,499" ? "En camino " : "Entregado"}
          </p>
        ) : null}
      </div>
      <div className="flex flex-row w-1/2 justify-around text-blue-700 pt-6 pl-10">
        {tipoProducto === "carrito" || tipoProducto === "vender" ? (
          <button onClick={() => eliminarDeCarrito(id)}>Eliminar</button>
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
