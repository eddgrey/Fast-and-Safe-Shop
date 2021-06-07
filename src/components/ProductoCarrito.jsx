/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useCarrito } from "../context/CarritoContext";

const ProductoCarrito = ({
  nombreProducto,
  precioProducto,
  precioEnCarrito,
  cantidadProducto,
  imgProducto,
  id,
}) => {
  const [cantidad, setCantidad] = useState(cantidadProducto);
  const { productosEnCarrito, setProductosEnCarrito, calcularTotalCarrito } =
    useCarrito();

  const eliminarDeCarrito = (idEliminar) => {
    setProductosEnCarrito(
      productosEnCarrito.filter((producto) => producto.id !== idEliminar)
    );
  };

  useEffect(() => {
    const newProductos = productosEnCarrito.map((producto) => {
      if (producto.id === id) {
        return {
          ...producto,
          precioProducto: parseInt(precioProducto) * parseInt(cantidad, 10),
          cantidad: cantidad,
        };
      } else {
        return producto;
      }
    });

    setProductosEnCarrito(newProductos);
  }, [cantidad]);

  useEffect(() => {
    calcularTotalCarrito();
  }, [productosEnCarrito]);

  return (
    <section className="border-b border-blueGray-400 py-8 w-full">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row w-1/2">
          <img src={imgProducto} alt="box" className=" w-14"></img>
          <div className="ml-4">
            <em className="text-lg font-medium">{nombreProducto}</em>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/4">
          <div className="border border-blueGray-400 flex flex-row items-center mb-4">
            <input
              className="bg-white h-full w-20 text-xl text-center"
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              min={1}
              max={40}
            ></input>
          </div>
          <p className="text-sm">Cantidad</p>
        </div>
        <NumberFormat
          value={precioEnCarrito}
          displayType="text"
          thousandSeparator={true}
          prefix="$"
          className="text-2xl font-medium"
        />
      </div>
      <div className="flex flex-row w-1/2 justify-around text-blue-700 pt-6 pl-10">
        <button onClick={() => eliminarDeCarrito(id)}>Eliminar</button>
      </div>
    </section>
  );
};

export default ProductoCarrito;
