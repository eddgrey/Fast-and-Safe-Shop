import { createContext, useState } from "react";

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

  return (
    <carritoContext.Provider
      value={{ productosEnCarrito, setProductosEnCarrito }}
    >
      {children}
    </carritoContext.Provider>
  );
};
