import React, { useContext } from "react";
import { productosContext } from "../context/ProductosContext";
import ProductoLista from "./ProductoLista";

const MisPedidos = () => {
  const { productos } = useContext(productosContext);
  return (
    <div>
      <section className="lista-productos">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-medium">Mis compras</h1>
          <h2 className="text-2xl font-medium">Estado</h2>
        </div>

        {productos.length > 0 ? (
          <>
            {productos.map(
              ({ nombreProducto, precioProducto, imgProducto }) => (
                <ProductoLista
                  key={nombreProducto + "1"}
                  nombreProducto={nombreProducto}
                  precioProducto={precioProducto}
                  imgProducto={imgProducto}
                  tipoProducto="pedido"
                />
              )
            )}
          </>
        ) : (
          <p>No ha realizado ninguna compra</p>
        )}
      </section>
    </div>
  );
};

export default MisPedidos;
