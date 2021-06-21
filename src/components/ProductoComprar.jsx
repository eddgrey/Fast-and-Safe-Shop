/* eslint-disable react/prop-types */
import NumberFormat from "react-number-format";

const ProductoComprar = ({ nombre, precio, img, cantidad = 1 }) => {
  return (
    <div className="flex-grow flex flex-row ml-4 mb-10">
      <img src={img} alt="box" className=" w-20 object-cover"></img>
      <div className="ml-4 flex flex-col justify-beetwen">
        <em className="text-lg font-semibold">{nombre}</em>
        <p className="font-medium b-2">{`Cantidad: ${cantidad}`}</p>
        <strong className="text-blueGray-900">
          Total:
          <NumberFormat
            value={precio}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
            className="text-red-800"
          />
        </strong>
        {/* <p className="text-sm text-blueGray-700 mb-2">
            Vendido por <em>Nombre de la Tienda</em>{" "}
          </p> */}
      </div>
    </div>
  );
};

export default ProductoComprar;
