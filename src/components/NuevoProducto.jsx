import React from "react";
import FormField from "./FormField";

const NuevoProducto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="w-full h-full flex flex-row justify-center">
      <form onSubmit={handleSubmit} className="formulario">
        <p className=" text-3xl pb-14 tracking-wider font-medium">
          Agregar producto
        </p>
        <FormField
          id="nombre"
          label="Nombre del producto"
          type="text"
          size="large"
          theme="light"
        />
        <div className="flex flex-row w-full justify-between ">
          <FormField
            id="precio"
            label="Precio del producto: "
            type="number"
            size="medium"
            theme="light"
          />

          <FormField
            id="Cantidad"
            label="Productos disponibles: "
            type="number"
            size="medium"
            theme="light"
          />
        </div>
        <div className="w-full mb-12 flex flex-col border-b border-blueGray-500">
          <label
            htmlFor="categoria"
            className="mb-2 text-sm uppercase tracking-wider"
          >
            Categoria
          </label>
          <select id="categoria" name="categoria">
            <option value="muebles">Muebles</option>
            <option value="deporte">Deporte</option>
            <option value="belleza">Belleza</option>
            <option value="ropa">Ropa</option>
            <option value="celulares">Celulares</option>
            <option value="computacion">Computación</option>
          </select>
        </div>
        <FormField
          id="imagen-principal"
          label="Imagen principal"
          type="file"
          size="large"
          theme="light"
        />
        <FormField
          id="imagen-secundaria1"
          label="Imagen secundaria 1"
          type="file"
          size="large"
          theme="light"
        />
        <FormField
          id="imagen-secundaria2"
          label="Imagen secundaria 2"
          type="file"
          size="large"
          theme="light"
        />
        <FormField
          id="imagen-secundaria3"
          label="Imagen secundaria 3"
          type="file"
          size="large"
          theme="light"
        />
        <div className="w-full mb-6">
          <label
            htmlFor="descripcion"
            className="mb-4 text-xs uppercase tracking-wider font-semibold"
          >
            Descripcion del producto
          </label>

          <textarea
            id="descripcion"
            name="descripcion"
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

export default NuevoProducto;
