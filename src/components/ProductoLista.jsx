/* eslint-disable react/prop-types */
import box from "../img/box.png";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { parse, isPast } from "date-fns";
import { useState, useEffect } from "react";

const ProductoLista = ({
  nombre,
  total,
  productos,
  direccion,
  fechaEntrega,
  metodoPago,
}) => {
  const [estadoCompra, setEstadoCompra] = useState("En camino");

  useEffect(() => {
    const entrega = parse(fechaEntrega, "dd 'de' MMM 'de' yyyy", new Date());
    const pedidoEntregado = isPast(entrega);
    if (pedidoEntregado) {
      setEstadoCompra("Entregado");
    }
  }, []);

  return (
    <section className="border-b border-blueGray-400 py-8 w-full">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row w-1/2">
          <img src={box} alt="pedido" className=" w-14"></img>
          <div className="ml-4 flex flex-col">
            <em className="text-lg font-medium">{nombre}</em>

            <NumberFormat
              value={total}
              prefix="$"
              displayType="text"
              thousandSeparator={true}
              className="text-lg font-medium"
            />
          </div>
        </div>
        <p className={`text-lg font-semibold text-green-700`}>{estadoCompra}</p>
      </div>
      <div className="flex flex-row w-1/2 justify-around text-blue-700 pt-6 pl-10">
        <Link
          to={{
            pathname: "/estado-compra",
            state: {
              productos,
              direccion,
              fechaEntrega,
              total,
              metodoPago,
            },
          }}
        >
          <p>Ver más</p>
        </Link>
      </div>
    </section>
  );
};

export default ProductoLista;
