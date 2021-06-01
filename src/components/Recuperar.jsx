import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Bienvenida from "./Bienvenida";
import FormField from "./FormField";

const Recuperar = () => {
  const notify = () => toast.success("");
  const showError = () => toast.error("Complete los campos faltantes");
  const removeQue = () => toast.clearWaitingQueue();

  const emailRef = useRef(null);
  const historial = useHistory();
  const handleSumbit = (e) => {
    e.preventDefault();
    if (emailRef.current.value.length === 0) {
      showError();
    } else {
      notify();
      historial.push("/nuevo-password");
    }
    console.log(historial);
    removeQue();
  };

  return (
    <section className="w-full h-screen flex flex-row bg-blueGray-800">
      <form
        className="flex flex-col items-center px-20 pt-12 pb-14 w-full md:w-3/5 text-blueGray-100 justify-around"
        onSubmit={handleSumbit}
      >
        <h2 className=" text-3xl mb-10">Restablecer contraseña</h2>

        <div className="w-3/4">
          <div className="flex flex-col w-full mb-12">
            <FormField
              id="email"
              label="Correo electrónico: "
              type="email"
              size="large"
              refInput={emailRef}
            />
            {/* <label
              htmlFor="nombre"
              className="mb-2 text-sm uppercase tracking-wider"
            >
              Correo electrónico :
            </label>
            <input
              id="nombre"
              type="email"
              className="py-1 pl-1 text-lg focus:outline-none w-full border-b-2 border-blueGray-600 bg-blueGray-800"
            /> */}
          </div>
        </div>
        <button className="button theme" type="submit">
          Continuar
        </button>
      </form>

      <Bienvenida message="Ingresar correo electrónico para continuar" />
      <ToastContainer limit={1} />
    </section>
  );
};

export default Recuperar;
