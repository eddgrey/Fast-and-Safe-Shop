/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import box from "../img/box.png";

const Producto = ({
  nombreProducto = "Nombre del producto",
  precioProducto = "precio",
  imgProducto = { box },
  categoriaProducto = "deporte",
}) => {
  return (
    <section className="producto">
      <img
        src={imgProducto}
        alt={nombreProducto}
        className="border-b border-blueGray-500  object-scale-down p-4 h-48"
      />
      <strong className="text-xl text-blueGray-900 mt-4">
        $ {precioProducto}
      </strong>
      <h2 className="text-blueGray-700 text-sm mb-2">{nombreProducto}</h2>
      <p className="hidden">{categoriaProducto}</p>
      <div className="theme button w-1/2 self-center text-base text-center px-4 py-1">
        <Link
          to={{
            pathname: "/ver-producto",
            state: {
              nombreProducto,
              precioProducto,
              imgProducto,
              categoriaProducto,
            },
          }}
        >
          <p>Ver más</p>
        </Link>
      </div>
    </section>
  );
};

export default Producto;
