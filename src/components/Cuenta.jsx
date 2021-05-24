/* eslint-disable react/prop-types */
import React from "react";

const Dato = ({ title, value }) => {
  return (
    <div className="flex flex-row px-4 py-4 border-b border-blueGray-300">
      <p className="w-2/5">{title}</p>
      <em className="w-2/5">{value}</em>
      <button className="w-1/5">Modificar</button>
    </div>
  );
};

const Cuenta = () => {
  return (
    <section className="w-3/5 min-h-full flex flex-col justify-around items-center mx-auto text-blueGray-900 mt-10">
      <h2 className="tracking-wide text-3xl font-medium">Mi Cuenta</h2>

      <div className="w-full mb-10">
        <h3 className="text-lg font-semibold tracking-wide mb-4">
          Datos de cuenta
        </h3>
        <div className="flex flex-col bg-blueGray-50 w-full border border-blueGray-300 rounded-xl">
          <Dato title="Usuario" value="Nombre usuario" />
          <Dato title="Correo electrónico:" value="example@email.com" />
          <Dato title="Contraseña" value="................" />
        </div>
      </div>

      <div className="w-full mb-10">
        <h3 className="text-lg font-semibold tracking-wide mb-4">
          Datos personales
        </h3>
        <div className="flex flex-col bg-blueGray-50 w-full border border-blueGray-300 rounded-xl">
          <Dato title="Nombre y Apellido" value="Nombre Apellido" />
          <Dato title="Teléfono:" value="" />
        </div>
      </div>

      <div className="w-full mb-10">
        <h3 className="text-lg font-semibold tracking-wide mb-4">
          Direcciones
        </h3>
        <div className="flex flex-col bg-blueGray-50 w-full border border-blueGray-300 rounded-xl">
          <Dato title="Usuario" value="Nombre usuario" />
          <Dato title="Correo electrónico:" value="example@email.com" />
          <p>Agregar dirección</p>
        </div>
      </div>
    </section>
  );
};

export default Cuenta;
