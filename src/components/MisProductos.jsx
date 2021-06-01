import React, { useContext } from "react";
import { productosContext } from "../context/ProductosContext";
// import { Link } from "react-router-dom";
import ProductoLista from "./ProductoLista";

const MisProductos = () => {
  const { productos } = useContext(productosContext);
  return (
    <div>
      <section className="lista-productos">
        <h1 className="text-2xl font-medium">Mis productos</h1>

        {productos.length > 0 ? (
          <>
            {productos.map(
              ({ nombreProducto, precioProducto, imgProducto }) => (
                <ProductoLista
                  key={nombreProducto + "1"}
                  nombreProducto={nombreProducto}
                  precioProducto={precioProducto}
                  imgProducto={imgProducto}
                  tipoProducto="vender"
                />
              )
            )}
          </>
        ) : (
          <p>No tiene productos</p>
        )}
      </section>
    </div>
  );
};

export default MisProductos;
