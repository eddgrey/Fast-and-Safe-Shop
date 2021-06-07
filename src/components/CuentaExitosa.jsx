/* eslint-disable */
import React from "react";
import { useHistory } from "react-router";
import Bienvenida from "./Bienvenida";

const CuentaExitosa = () => {
  const historial = useHistory();
  return (
    <div>
      <section className="flex h-screen bg-blueGray-800">
        <div className="m-auto">
          <h2 className="text-white text-4xl mt-6 mb-10 font-medium">
            {" "}
            ¡Te has registrado correctamente!
          </h2>
          <button
            className="button theme"
            onClick={(e) => {
              e.preventDefault();
              historial.push("/login");
            }}
          >
            Iniciar sesión
          </button>
        </div>
        <Bienvenida message="¡Ahora puedes iniciar sesión con tu cuenta!" />
      </section>
    </div>
  );
};

export default CuentaExitosa;
