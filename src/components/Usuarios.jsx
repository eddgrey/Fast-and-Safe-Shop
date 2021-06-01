import React from "react";

const Usuarios = () => {
  const usuarios = [
    { nombre: "comprador1", email: "ejemplo@email.com", tipo: "Comprador" },
    { nombre: "vendedor1", email: "ejemplo@email.com", tipo: "Vendedor" },
    { nombre: "comprador2", email: "ejemplo@email.com", tipo: "Comprador" },
    { nombre: "vendedor2", email: "ejemplo@email.com", tipo: "Vendedor" },
  ];
  return (
    <section className="formulario">
      <h1 className="text-2xl font-medium text-center mb-10">Usuarios</h1>
      <table className="table-auto border-collapse w-full">
        <thead className="text-center bg-blueGray-800 text-blueGray-50 text-lg">
          <tr>
            <td className="row-table">Nombre</td>
            <td className="row-table">Correo electrónico</td>
            <td className="row-table">Tipo de usuario</td>
            <td className="row-table">Opciones</td>
          </tr>
        </thead>
        <tbody className="text-blueGray-900">
          {usuarios.map(({ nombre, email, tipo }, id) => (
            <tr className="" key={id}>
              <td className="row-table">{nombre}</td>
              <td className="row-table">{email}</td>
              <td className="row-table">{tipo}</td>
              <td className="row-table">
                <span className="flex flex-row justify-around">
                  <p className="text-blue-800">Ver mas</p>
                  <p className="text-blue-800">Eliminar</p>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Usuarios;
