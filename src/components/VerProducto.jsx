/* eslint-disable react/prop-types */
import box from "../img/box.png";
import { useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import { tipoUsuarioContext } from "../context/TipoUsuarioContext";
import { useCarrito } from "../context/CarritoContext";
import { messageToShowContext } from "../context/MessageToShowContext";
import { ToastContainer, toast } from "react-toastify";
import NumberFormat from "react-number-format";

const Box = () => {
  return (
    <div className="border-2 border-blueGray-400 p-2 mb-2">
      <img src={box} alt="box" className="w-10"></img>
    </div>
  );
};

const VerProducto = () => {
  const { nombreProducto, precioProducto, imgProducto, id } =
    useLocation().state;
  const producto = useLocation().state;
  const { tipoUsuario } = useContext(tipoUsuarioContext);
  const { setMessageToShow } = useContext(messageToShowContext);
  const { productosEnCarrito, setProductosEnCarrito, setProductoComprarAhora } =
    useCarrito();
  const historial = useHistory();

  const showMessage = () => toast.success("El producto se agrego al carrito");
  const removeQue = () => toast.clearWaitingQueue();

  const comprarProducto = () => {
    if (tipoUsuario === "noRegistrado") {
      setMessageToShow("Se necesita iniciar sesión");
      historial.push("/login");
    } else {
      setProductoComprarAhora(producto);
      historial.push("/comprar");
    }
  };

  const agregarCarrito = () => {
    if (tipoUsuario === "noRegistrado") {
      setMessageToShow("Se necesita iniciar sesión");
      historial.push("/login");
    } else {
      const exist = productosEnCarrito.find((producto) => producto.id === id);

      if (!exist) {
        setProductosEnCarrito([
          ...productosEnCarrito,
          { nombreProducto, precioProducto, imgProducto, id, cantidad: 1 },
        ]);
      } else {
        const nuevosProductos = productosEnCarrito.map((producto) => {
          if (producto.id === id) {
            return {
              ...producto,
              cantidad: parseInt(producto.cantidad) + 1,
            };
          } else {
            return producto;
          }
        });

        setProductosEnCarrito(nuevosProductos);
      }
      showMessage();
    }
    removeQue();
  };

  return (
    <section className="flex flex-row w-11/12 h-4/5 px-4 py-6 mt-10 bg-blueGray-100 mx-auto text-blueGray-900">
      <div className="flex flex-col">
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
      <div className="flex flex-row justify-center w-1/3">
        <img
          src={imgProducto}
          alt={nombreProducto}
          className=" object-cover p-4"
        ></img>
      </div>
      <div className="flex flex-col justify-around w-1/3">
        <div>
          <em className="text-2xl font-medium">{nombreProducto}</em>
          <div className="text-blue-600 flex flex-row items-center mt-2 text-sm">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        <div>
          <NumberFormat
            value={precioProducto}
            prefix="$"
            thousandSeparator={true}
            displayType="text"
            className="text-3xl mb-1 font-medium"
          />
        </div>
        <div className="text-lg">Descripción del producto</div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col justify-center h-full border border-blueGray-300 mb-4 p-4">
          <button
            className="theme rounded-lg my-4 text-center px-2 py-3"
            onClick={comprarProducto}
          >
            Comprar ahora
          </button>
          <button
            className="px-2 py-3 w-full bg-gradient-to-r from-blue-500 via-blue-600  to-indigo-500 text-white rounded-lg my-4 text-center"
            onClick={agregarCarrito}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
      <ToastContainer limit={1} />
    </section>
  );
};

export default VerProducto;
