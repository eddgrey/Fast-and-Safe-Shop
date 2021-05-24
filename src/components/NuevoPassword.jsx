import { Link } from "react-router-dom";
import Bienvenida from "./Bienvenida";
import FormField from "./FormField";

const NuevoPassword = () => {
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full h-screen flex flex-row bg-blueGray-800">
      <form
        onSubmit={handleSumbit}
        className="flex flex-col items-center px-20 pt-12 pb-14 w-3/5 text-blueGray-100 justify-around"
      >
        <p className=" text-3xl mb-10">Nueva contraseña</p>
        <div className="w-3/4">
          <FormField
            id="newPassword"
            label="Nueva contraseña:"
            type="password"
            size="meduim"
          />

          <FormField
            id="password"
            label="Confirmar contraseña:"
            type="password"
            size="meduim"
          />
        </div>
        <Link to="/">
          <button className="button theme">Continuar</button>
        </Link>
      </form>

      <Bienvenida message="Establecer nueva contraseña para continuar" />
    </section>
  );
};

export default NuevoPassword;
