/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useUsuario } from "../context/TipoUsuarioContext";
import Direccion from "./Direccion";
const Dato = ({ title, value }) => {
  return (
    <div className="flex flex-row px-4 py-4 border-b border-blueGray-300">
      <p className="w-2/5">{title}</p>
      <em className="w-2/5">{value}</em>
      <button className="w-1/5 text-blue-800">Modificar</button>
    </div>
  );
};

const Cuenta = () => {
  const { tipoUsuario } = useUsuario();
  return (
    <section className="cuenta">
      <h2 className="tracking-wide text-3xl font-medium">Mi Cuenta</h2>

      <div className="w-full mb-10">
        <h3 className="text-lg font-semibold tracking-wide mb-4">
          Datos de cuenta
        </h3>
        <section className="seccion-cuenta">
          <Dato title="Nombre" value="Nombre usuario" />
          <Dato title="Correo electrónico:" value="example@email.com" />
          <Dato title="Contraseña" value="................" />
        </section>
      </div>

      {tipoUsuario === "comprador" ? (
        <>
          <div className="w-full mb-10">
            <h3 className="text-lg font-semibold tracking-wide mb-4">
              Direcciones
            </h3>
            <div className="seccion-cuenta">
              <Direccion />
              {/* <div className="flex flex-row w-full px-4 items-center justify-between my-4 border-b border-blueGray-300">
                <span className="text-blue-700 text-xl mx-8 w-2/5">
                  <i className="fas fa-map-marker-alt"></i>
                </span>

                <div className="w-2/5">
                  <p className="font-normal">CP</p>
                  <p className="text-sm text-blueGray-500">Calle</p>
                  <p className="text-sm text-blueGray-500">Nombre</p>
                  <p className="text-sm text-blueGray-500">Tel.</p>
                </div>
                <Link to="/domicilio" className="">
                  <p className="text-blue-700 ml-48">Modificar</p>
                </Link>
              </div> */}
              {/* <Link to="domicilio">
                <p className="m-4 text-blue-800 text-right">
                  Agregar dirección
                </p>
              </Link> */}
            </div>
          </div>
          <div className="w-full mb-10">
            <h3 className="text-lg font-semibold tracking-wide mb-4">
              Tarjetas
            </h3>
            <div className="seccion-cuenta">
              <p>Tarjeta</p>
              <Link to="/tarjetas">
                <p className="m-4 text-blue-800 text-right">Agregar tarjeta</p>
              </Link>
            </div>
          </div>
        </>
      ) : null}
      <button className="button theme mb-10">Eliminar Cuenta</button>
    </section>
  );
};

export default Cuenta;
