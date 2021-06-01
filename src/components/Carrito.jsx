/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { carritoContext } from "../context/CarritoContext";
import ProductoLista from "./ProductoLista";
// import box from "../img/box.png";

const Carrito = () => {
  const { productosEnCarrito } = useContext(carritoContext);

  return (
    <section className="mx-auto mt-10 w-11/12 min-h-screen  py-6 px-10 bg-blueGray-100 text-blueGray-900">
      <h1 className="text-2xl font-medium">Carrito de compras</h1>

      {productosEnCarrito.length > 0 ? (
        <>
          {productosEnCarrito.map(
            ({ nombreProducto, precioProducto, imgProducto }) => (
              <ProductoLista
                key={nombreProducto + "1"}
                nombreProducto={nombreProducto}
                precioProducto={precioProducto}
                imgProducto={imgProducto}
                tipoProducto="carrito"
              />
            )
          )}
          <div className="total-carrito">
            <p className=" mr-40">Total con envío</p>
            <p>$Total</p>
          </div>
          <div className="flex flex-row justify-end pt-8">
            <Link to="/comprar">
              <button className="button theme mb-2">Continuar compra</button>
            </Link>
          </div>
        </>
      ) : (
        <p className="mt-20 text-center">Carrito vacio</p>
      )}
    </section>
  );
};

export default Carrito;
