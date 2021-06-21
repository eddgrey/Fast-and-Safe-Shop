import FormField from "./FormField";
import { Link } from "react-router-dom";

const Tarjetas = () => {
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full h-full flex flex-row justify-center">
      <form
        onSubmit={handleSumbit}
        className="flex flex-col justify-around items-center px-8 py-6 my-10 md:w-3/5 w-4/5 text-blueGray-900 bg-blueGray-100"
      >
        <p className="text-3xl pb-14 uppercase tracking-wider font-medium">
          Tarjeta de crédito
        </p>
        <FormField
          id="numero-tarjeta"
          label="Número de tarjeta: "
          type="text"
          size="large"
          theme="light"
        />
        <FormField
          id="nombre-completo"
          label="Nombre y Apellido: "
          type="text"
          size="large"
          theme="light"
        />

        <div className="flex flex-row w-full justify-between ">
          <FormField
            id="estado"
            label="Fecha de expiracion: "
            type="date"
            size="medium"
            theme="light"
          />

          <FormField
            id="codigo"
            label="Código de seguridad: "
            type="password"
            size="medium"
            theme="light"
          />
        </div>
        <Link
          to={{ pathname: "/comprar", state: { metodo: "Tarjeta de crédito" } }}
          className="button theme"
        >
          Continuar
        </Link>
      </form>
    </section>
  );
};

export default Tarjetas;
