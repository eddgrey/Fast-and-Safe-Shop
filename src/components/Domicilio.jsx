import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useUsuario } from "../context/TipoUsuarioContext";
import FormField from "./FormField";

const Domicilio = () => {
  const historial = useHistory();
  const refNombre = useRef(null);
  const refCP = useRef(null);
  const refCalle = useRef(null);
  const refTel = useRef(null);

  const { setDireccion } = useUsuario();

  const handleSumbit = (e) => {
    e.preventDefault();
    setDireccion({
      nombre: refNombre.current.value,
      calle: refCalle.current.value,
      cp: refCP.current.value,
      tel: refTel.current.value,
    });
    historial.goBack();
  };

  return (
    <section className="w-full h-full flex flex-row justify-center">
      <form onSubmit={handleSumbit} className="formulario">
        <p className=" text-3xl pb-14 uppercase tracking-wider font-medium">
          Domicilio
        </p>

        <FormField
          id="nombre-completo"
          label="Nombre y Apellido: "
          type="text"
          size="large"
          theme="light"
          refInput={refNombre}
        />

        <FormField
          id="codigo"
          label="Código postal: "
          type="text"
          size="large"
          theme="light"
          refInput={refCP}
        />

        <div className="flex flex-row w-full justify-between ">
          <FormField
            id="estado"
            label="Estado: "
            type="text"
            size="medium"
            theme="light"
          />

          <FormField
            id="municipio"
            label="Municipio: "
            type="text"
            size="medium"
            theme="light"
          />
        </div>

        <div className="flex flex-row w-full justify-between ">
          <FormField
            id="calle"
            label="Calle: "
            type="text"
            size="medium"
            theme="light"
            refInput={refCalle}
          />

          <FormField
            id="num-ext"
            label="Número exterior: "
            type="text"
            size="medium"
            theme="light"
          />
        </div>

        <div className="flex flex-row w-full justify-between ">
          <FormField
            id="num-ext"
            label="Teléfono de contacto: "
            type="text"
            size="medium"
            theme="light"
            refInput={refTel}
          />

          <FormField
            id="num-ext"
            label="Número interior: "
            type="text"
            size="medium"
            theme="light"
          />
        </div>

        <div className="w-full mb-6">
          <label
            htmlFor="indicaciones"
            className="mb-4 text-xs uppercase tracking-wider font-semibold"
          >
            Indicaciones adicionales para entregar tus compras en esta dirección
          </label>

          <textarea
            id="indicaciones"
            name="indicaciones"
            rows="3"
            className="border border-blueGray-500 w-full focus:outline-none p-2 mt-4"
          ></textarea>
        </div>
        <button className="button theme" type="submit">
          Continuar
        </button>
      </form>
    </section>
  );
};

export default Domicilio;
