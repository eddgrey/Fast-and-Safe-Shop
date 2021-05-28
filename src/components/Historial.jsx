import React from "react";
import box from "../img/box.png";
import Producto from "./Producto";

import { ToastContainer, toast } from "react-toastify";

const Historial = () => {
  const notify = () => toast("Wow so easy !");

  return (
    <section className="w-screen h-full flex flex-col justify-between">
      <div className="flex flex-row justify-between items-center border py-8 px-10">
        <h2 className="text-blueGray-900 text-3xl">Historial de pedidos</h2>
        <button className="theme button font-medium" onClick={notify}>
          Borrar historial
        </button>
        <ToastContainer />
      </div>

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

export default Historial;
