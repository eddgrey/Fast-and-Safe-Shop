import smartTv from "../img/smartTv.jpg";
import laptop from "../img/laptop.jpg";
import pocoX3 from "../img/Xiaomi_PocoX3.png";
import caminadora from "../img/caminadora.jpg";
import tablet from "../img/tabletSamsung.jpg";
import cama from "../img/cama.jpg";

import { createContext, useState, useContext } from "react";

export const productosContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductosProvaider = ({ children }) => {
  const [productos, setProductos] = useState([
    {
      nombreProducto: "Smart TV Hisense 43H6500G LED 4K 43' 120V",
      id: 1,
      precioProducto: 7599,
      categoriaProducto: "Tecnologia",
      imgProducto: smartTv,
    },
    {
      nombreProducto: "Laptop Lenovo V-Series V14-IIL, 8GB de RAM 1TB HDD",
      id: 2,
      precioProducto: 12499,
      categoriaProducto: "Computación",
      imgProducto: laptop,
    },
    {
      nombreProducto: "Xiaomi Poco X3 NFC Dual SIM 128 GB cobalt blue 6 GB RAM",
      id: 3,
      precioProducto: 5131,
      categoriaProducto: "Celulares",
      imgProducto: pocoX3,
    },
    {
      nombreProducto:
        "Caminadora eléctrica Centurfit MKZ-CAML515 110V - 120V negra",
      id: 4,
      precioProducto: 6199,
      categoriaProducto: "Deporte",
      imgProducto: caminadora,
    },
    {
      nombreProducto:
        "Tablet Samsung Galaxy Tab A 2019 SM-T290 8' 32GB plata con 2GB de memoria RAM",
      id: 5,
      precioProducto: 2399,
      categoriaProducto: "Computación",
      imgProducto: tablet,
    },
    {
      nombreProducto: "Base Cama Urban Matrimonial - Base + Cabecera + 2 Buros",
      id: 6,
      precioProducto: 3679,
      categoriaProducto: "Muebles",
      imgProducto: cama,
    },
  ]);

  const precioOriginalProducto = (id) =>
    productos.filter((producto) => producto.id === id)[0].precioProducto;

  return (
    <productosContext.Provider
      value={{ productos, setProductos, precioOriginalProducto }}
    >
      {children}
    </productosContext.Provider>
  );
};

export const useProductos = () => useContext(productosContext);
