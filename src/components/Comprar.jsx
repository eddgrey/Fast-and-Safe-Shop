/* eslint-disable react/prop-types */
import React, { useContext } from "react";
// import box from "../img/box.png";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { messageToShowContext } from "../context/MessageToShowContext";
import { useCarrito } from "../context/CarritoContext";
import NumberFormat from "react-number-format";

const ProductoComprar = ({ nombre, precio, img, cantidad = 1 }) => {
  return (
    <div className="flex-grow flex flex-row ml-4 mb-10">
      <img src={img} alt="box" className=" w-20 object-cover"></img>
      <div className="ml-4 flex flex-col justify-beetwen">
        <em className="text-lg font-semibold">{nombre}</em>
        <p className="font-medium b-2">{`Cantidad: ${cantidad}`}</p>
        <strong className="text-blueGray-900">
          Total:
          <NumberFormat
            value={precio}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
            className="text-red-800"
          />
        </strong>
        {/* <p className="text-sm text-blueGray-700 mb-2">
          Vendido por <em>Nombre de la Tienda</em>{" "}
        </p> */}
      </div>
    </div>
  );
};

const Comprar = () => {
  const historial = useHistory();
  const {
    productosEnCarrito,
    setProductosEnCarrito,
    productoComprarAhora,
    totalCarrito,
  } = useCarrito();
  const { setMessageToShow } = useContext(messageToShowContext);
  const notify = () => toast.info("Cargando...");

  const handleComprar = () => {
    notify();
    setMessageToShow("La compra se ha realizado correctamente");
    setProductosEnCarrito([]);
    setTimeout(() => historial.push("/"), 3000);
  };

  return (
    <section className="flex flex-row py-6 px-8 h-4/5 text-blueGray-900">
      <div className="w-4/5 mr-8">
        <strong className="text-2xl font-semibold">
          Revisa y confirma tu compra
        </strong>
        <div className="border border-blueGray-400 mt-6 bg-blueGray-100">
          <div className="w-1/2 px-4 py-4">
            <h2 className="text-lg font-semibold">Domicilio</h2>
            <div className="flex flex-row justify-between items-center mt-4">
              <span className="text-blue-700 text-xl mx-8">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <div>
                <p className="font-normal">CP</p>
                <p className="text-sm text-blueGray-500">Calle</p>
                <p className="text-sm text-blueGray-500">Nombre</p>
                <p className="text-sm text-blueGray-500">Tel.</p>
              </div>
              <Link to="/domicilio">
                <p className="text-blue-700 ml-24">Modificar</p>
              </Link>
            </div>
          </div>
          <div className="w-1/2 px-4 py-4">
            <h2 className="text-lg font-semibold ">Método de pago</h2>
            <div className="flex flex-row justify-between items-center mt-6">
              <span className="text-blue-600 text-xl ml-8">
                <i className="far fa-credit-card"></i>
              </span>
              <div>
                <em>Nombre del método de pago</em>
                <p className="text-sm text-blueGray-500">
                  El pago se hará a través de...
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
            Fecha de entrega: ___________
          </h2>
          {productoComprarAhora ? (
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
        {/* <p>
          Productos: <strong className="ml-8">$0.00</strong>
        </p>
        <p>
          Envío: <strong className="ml-16">$0.00</strong>
        </p> */}
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
