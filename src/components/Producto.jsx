/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Producto = ({ name = "Nombre del producto", precio = "precio", img }) => {
  return (
    <section className="flex flex-col justify-around bg-blueGray-100 w-1/6 px-2 pb-6">
      <img
        src={img}
        alt={name}
        className="border-b border-blueGray-500  object-scale-down p-4 h-48"
      />
      <strong className="text-xl text-blueGray-900 mt-4">$ {precio}</strong>
      <h2 className="text-blueGray-700 text-sm mb-2">{name}</h2>
      <div className="theme button w-1/2 self-center text-base text-center px-4 py-1">
        <Link to="/verProducto">
          <p>Ver más</p>
        </Link>
      </div>
    </section>
  );
};

export default Producto;
