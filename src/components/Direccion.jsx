/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useUsuario } from "../context/TipoUsuarioContext";

const Direccion = ({ modificar = true }) => {
  const { direccion } = useUsuario();
  return (
    <div className="w-1/2 px-4 py-4">
      <h2 className="text-lg font-semibold">Domicilio</h2>
      <div className="flex flex-row justify-between items-center mt-4">
        <span className="text-blue-700 text-xl mx-8">
          <i className="fas fa-map-marker-alt"></i>
        </span>
        <div>
          <p className="font-normal">CP: {direccion.cp}</p>
          <p className="text-sm text-blueGray-500">Calle: {direccion.calle}</p>
          <p className="text-sm text-blueGray-500">
            Nombre: {direccion.nombre}
          </p>
          <p className="text-sm text-blueGray-500">Tel.{direccion.tel}</p>
        </div>
        {modificar ? (
          <Link to="/domicilio">
            <p className="text-blue-700 ml-24">Modificar</p>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Direccion;
