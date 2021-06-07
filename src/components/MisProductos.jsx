import { useContext, useEffect } from "react";
import { messageToShowContext } from "../context/MessageToShowContext";
import { productosContext } from "../context/ProductosContext";
import { ToastContainer, toast } from "react-toastify";
import ProductoLista from "./ProductoLista";

const MisProductos = () => {
  const { productos } = useContext(productosContext);
  const { messageToShow, setMessageToShow } = useContext(messageToShowContext);

  useEffect(() => {
    if (messageToShow.length > 0) {
      (() => toast.success(messageToShow))();
      setTimeout(setMessageToShow(""), 1000);
    }
  }, []);

  return (
    <div>
      <section className="lista-productos">
        <h1 className="text-2xl font-medium">Mis productos</h1>

        {productos.length > 0 ? (
          <>
            {productos.map(
              ({ nombreProducto, precioProducto, imgProducto, id }) => (
                <ProductoLista
                  key={id}
                  id={id}
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
      <ToastContainer />
    </div>
  );
};

export default MisProductos;
