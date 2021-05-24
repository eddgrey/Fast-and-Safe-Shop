import React from "react";
import box from "../img/box.png";
import { Link } from "react-router-dom";

const Comprar = () => {
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
              <p className="text-blue-600 ">Modificar</p>
            </div>
            <p className="text-sm text-blueGray-500 pl-6 pt-3">
              No demores en pagar, solo podemos reservarte stock cuando el pago
              se acredite
            </p>
          </div>
        </div>
        <div className="flex flex-col border border-blueGray-400 px-4 py-4 mt-8 bg-blueGray-100">
          <h2 className=" text-green-800 text-lg font-semibold mb-6">
            Fecha de entrega: ___________
          </h2>
          <div className="flex-grow flex flex-row ml-4">
            <img src={box} alt="box" className="w-14"></img>
            <div className="ml-4 flex flex-col justify-beetwen">
              <em className="text-lg font-semibold">Nombre del producto</em>
              <strong className="text-red-800">$Precio</strong>
              <p className="font-medium b-2">Cantidad: 1</p>
              <p className="text-sm text-blueGray-700 mb-2">
                Vendido por <em>Nombre de la Tienda</em>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around w-1/5 border border-blueGray-400 p-4 h-full mt-14 bg-blueGray-100">
        <button className="button theme px-4 text-base mb-4">
          Confirmar compra
        </button>
        <h2 className=" font-semibold mb-4">Resumen del pedido</h2>
        <p>
          Productos: <strong className="ml-8">$0.00</strong>
        </p>
        <p>
          Envío: <strong className="ml-16">$0.00</strong>
        </p>
        <strong className="text-red-800 border-t-2 border-blueGray-500 text-xl pt-2 mt-2">
          Total $0.0
        </strong>
      </div>
    </section>
  );
};

export default Comprar;
