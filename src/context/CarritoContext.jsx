import { createContext, useState, useContext } from "react";

export const carritoContext = createContext();

// eslint-disable-next-line react/prop-types
export const CarritoProvaider = ({ children }) => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([
    // {
    //   nombreProducto: "Laptop Lenovo V-Series V14-IIL, 8GB de RAM 1TB HDD",
    //   precioProducto: "12,499",
    //   categoriaProducto: "Computacion",
    // },
  ]);
  const [total, setTotalCarrito] = useState(0);
  const [productoComprarAhora, setProductoComprarAhora] = useState({});

  const calcularTotalCarrito = () => {
    let total = 0;
    productosEnCarrito.forEach(
      (producto) => (total += producto.precioProducto)
    );
    setTotalCarrito(total);
  };

  const totalCarrito = () => total;

  return (
    <carritoContext.Provider
      value={{
        productosEnCarrito,
        setProductosEnCarrito,
        productoComprarAhora,
        setProductoComprarAhora,
        totalCarrito,
        calcularTotalCarrito,
      }}
    >
      {children}
    </carritoContext.Provider>
  );
};

export const useCarrito = () => useContext(carritoContext);
