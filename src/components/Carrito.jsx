/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import NumberFormat from "react-number-format";
import { useProductos } from "../context/ProductosContext";
import ProductoCarrito from "./ProductoCarrito";
import { useEffect } from "react";

const Carrito = () => {
  const { productosEnCarrito, totalCarrito, setProductoComprarAhora } =
    useCarrito();
  const { precioOriginalProducto } = useProductos();

  useEffect(() => {
    setProductoComprarAhora({});
  }, []);

  return (
    <section className="mx-auto mt-10 w-11/12 min-h-screen  py-6 px-10 bg-blueGray-100 text-blueGray-900">
      <h1 className="text-2xl font-medium">Carrito de compras</h1>

      {productosEnCarrito.length > 0 ? (
        <>
          {productosEnCarrito.map(
            ({ nombreProducto, precioProducto, imgProducto, id, cantidad }) => (
              <ProductoCarrito
                key={id}
                id={id}
                nombreProducto={nombreProducto}
                precioProducto={precioOriginalProducto(id)}
                precioEnCarrito={precioProducto}
                cantidadProducto={cantidad}
                imgProducto={imgProducto}
              />
            )
          )}
          <div className="total-carrito">
            <p className=" mr-40">Total</p>
            <NumberFormat
              value={totalCarrito()}
              displayType="text"
              thousandSeparator={true}
              prefix="$"
            />
          </div>
          <div className="flex flex-row justify-end pt-8">
            <Link to="/comprar">
              <button className="button theme mb-2">Continuar compra</button>
            </Link>
          </div>
        </>
      ) : (
        <p className="mt-20 text-center">Carrito vacío</p>
      )}
    </section>
  );
};

export default Carrito;
