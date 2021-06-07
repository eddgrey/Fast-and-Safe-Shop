import Producto from "./Producto";
import { useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useProductos } from "../context/ProductosContext";
import { messageToShowContext } from "../context/MessageToShowContext";

const Home = () => {
  const { productos } = useProductos();
  const { messageToShow, setMessageToShow } = useContext(messageToShowContext);

  useEffect(() => {
    console.log(messageToShow);
    if (messageToShow.length > 0) {
      (() => toast.success(messageToShow))();
      setTimeout(setMessageToShow(""), 5000);
    }
  }, []);

  return (
    <main className="w-full h-full ">
      <h2 className="text-blueGray-900 text-3xl px-10 pt-10">Ofertas</h2>
      <section className="flex flex-row justify-around flex-wrap w-full pt-6">
        {productos.map(
          ({ nombreProducto, precioProducto, imgProducto, id }) => (
            <Producto
              key={id}
              id={id}
              nombreProducto={nombreProducto}
              precioProducto={precioProducto}
              imgProducto={imgProducto}
            />
          )
        )}
      </section>
      <ToastContainer />
    </main>
  );
};

export default Home;
