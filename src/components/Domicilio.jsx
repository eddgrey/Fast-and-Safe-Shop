import React from "react";
import { Link } from "react-router-dom";
import FormField from "./FormField";

const Domicilio = () => {
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full h-full flex flex-row justify-center">
      <form
        onSubmit={handleSumbit}
        className="flex flex-col justify-around items-center px-8 py-6 my-10 md:w-3/5 w-4/5 text-blueGray-900 bg-blueGray-100"
      >
        <p className=" text-3xl pb-14 uppercase tracking-wider font-medium">
          Domicilio
        </p>

        <FormField
          id="nombre-completo"
          label="Nombre y Apellido: "
          type="text"
          size="large"
          theme="light"
        />

        <FormField
          id="codigo"
          label="Código postal: "
          type="text"
          size="large"
          theme="light"
        />
        {/* 
                <div className="flex flex-col w-full mb-12">
                    <label htmlFor="text" className="mb-2 text-sm uppercase tracking-wider"> Probando</label>
                    <input id="text" type="text" className="py-1 pl-1 w-full input-light"/>
                </div> */}

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
        <Link to="/comprar">
          <button className="button theme">Continuar</button>
        </Link>
      </form>
    </section>
  );
};

export default Domicilio;
