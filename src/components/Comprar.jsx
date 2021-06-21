/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { format, add } from "date-fns";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { messageToShowContext } from "../context/MessageToShowContext";
import { useCarrito } from "../context/CarritoContext";
import NumberFormat from "react-number-format";
import { useUsuario } from "../context/TipoUsuarioContext";
import ProductoComprar from "./ProductoComprar";
import Direccion from "./Direccion";

const Comprar = () => {
  const historial = useHistory();
  const metodoPago = useLocation().state || "";
  const { compras, setCompras, direccion } = useUsuario();

  const entrega = format(add(new Date(), { days: 3 }), "dd 'de' MMM 'de' yyyy");

  const {
    productosEnCarrito,
    setProductosEnCarrito,
    productoComprarAhora,
    totalCarrito,
  } = useCarrito();

  const { setMessageToShow } = useContext(messageToShowContext);
  const notify = () => toast.info("Cargando...");
  const errorDireccion = () => toast.error("Seleccione un domicilio");
  const errorPago = () => toast.error("Seleccione un método de pago");

  const handleComprar = () => {
    if (!direccion.nombre || !direccion.cp || !direccion.calle) {
      errorDireccion();
      return;
    }
    if (!metodoPago) {
      errorPago();
      return;
    }
    notify();
    setMessageToShow("La compra se ha realizado correctamente");
    if (Object.keys(productoComprarAhora).length !== 0) {
      setCompras([
        ...compras,
        {
          total: productoComprarAhora.precioProducto,
          fechaEntrega: entrega,
          productos: [productoComprarAhora],
          metodoPago,
          direccion,
        },
      ]);
    } else {
      setCompras([
        ...compras,
        {
          total: totalCarrito(),
          productos: [...productosEnCarrito],
          fechaEntrega: entrega,
          metodoPago,
          direccion,
          estadoCompra: "En camino",
        },
      ]);
    }
    setProductosEnCarrito([]);
    setTimeout(() => historial.push("/"), 1500);
  };

  return (
    <section className="flex flex-row py-6 px-8 h-4/5 text-blueGray-900">
      <div className="w-4/5 mr-8">
        <strong className="text-2xl font-semibold">
          Revisa y confirma tu compra
        </strong>
        <div className="border border-blueGray-400 mt-6 bg-blueGray-100">
          <Direccion />
          <div className="w-1/2 px-4 py-4">
            <h2 className="text-lg font-semibold ">Método de pago</h2>
            <div className="flex flex-row justify-between items-center mt-6">
              <span className="text-blue-600 text-xl ml-8">
                <i className="far fa-credit-card"></i>
              </span>
              <div>
                <em>{}</em>
                <p className="text-sm text-blueGray-500">
                  {metodoPago
                    ? metodoPago.metodo
                    : "El pago se hará a través de..."}
                </p>
              </div>
              <Link to="/metodo-pago">
                <p className="text-blue-700 ml-24">Modificar</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-blueGray-400 px-4 py-4 mt-8 bg-blueGray-100">
          <h2 className=" text-green-800 text-lg font-semibold mb-6">
            Fecha de entrega: {entrega}
          </h2>
          {Object.keys(productoComprarAhora).length !== 0 ? (
            <ProductoComprar
              nombre={productoComprarAhora.nombreProducto}
              precio={productoComprarAhora.precioProducto}
              img={productoComprarAhora.imgProducto}
              cantidad={1}
            />
          ) : (
            productosEnCarrito.map(
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
            )
          )}
        </div>
      </div>
      <div className="flex flex-col justify-around w-1/5 border border-blueGray-400 p-4 h-full mt-14 bg-blueGray-100">
        <button
          className="button theme px-4 text-base mb-4"
          onClick={handleComprar}
        >
          Confirmar compra
        </button>
        <h2 className=" font-semibold mb-4">Resumen del pedido</h2>

        <strong className="border-t-2 border-blueGray-500 text-xl pt-2 mt-2">
          Total :
          <NumberFormat
            value={
              totalCarrito()
                ? totalCarrito()
                : productoComprarAhora.precioProducto
            }
            displayType="text"
            thousandSeparator={true}
            prefix="$"
            className="text-red-800 text-2xl ml-2"
          />
        </strong>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Comprar;
