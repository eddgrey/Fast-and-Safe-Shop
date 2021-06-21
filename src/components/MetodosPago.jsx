import { useState } from "react";
import { useHistory } from "react-router-dom";

const MetodosPago = () => {
  const [metodoPago, setMetodoPago] = useState("");
  const historial = useHistory();
  const handleSumbit = (e) => {
    e.preventDefault();
    if (metodoPago === "tarjeta") {
      historial.push("/tarjetas");
    }
  };
  return (
    <section className="w-full h-full flex flex-row justify-center">
      <form
        onSubmit={handleSumbit}
        className="flex flex-col justify-around h-screen items-center px-8 py-6 my-10 md:w-3/5 w-4/5 text-blueGray-900 bg-blueGray-100"
      >
        <p className=" text-3xl pb-14  tracking-wider font-medium">
          Método de pago
        </p>

        <div className="border border-blueGray-500 p-4 text-lg w-1/3">
          <input
            id="tarjeta"
            name="tarjeta"
            type="radio"
            value="tarjeta"
            className=""
            checked={metodoPago === "tarjeta"}
            onChange={(e) => setMetodoPago(e.target.value)}
          />
          <label htmlFor="vendedor" className="ml-4">
            Tarjeta de crédito
          </label>
        </div>
        <div className="border border-blueGray-500 p-4 text-lg w-1/3">
          <input
            id="comprador"
            name="comprador"
            type="radio"
            value="comprador"
            checked={metodoPago === "comprador"}
            onChange={(e) => setMetodoPago(e.target.value)}
          />
          <label htmlFor="comprador" className="ml-4">
            PayPal
          </label>
        </div>
        <button className="button theme" type="submit">
          Continuar
        </button>
      </form>
    </section>
  );
};

export default MetodosPago;
