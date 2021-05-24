import FormField from "./FormField";
import Bienvenida from "./Bienvenida";
import { Link } from "react-router-dom";

const CrearCuenta = () => {
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <section className="w-full h-screen flex flex-row bg-blueGray-800">
      <form
        onSubmit={handleSumbit}
        className="flex flex-col justify-around items-center px-14 py-6 w-3/5 text-blueGray-100"
      >
        <p className=" text-3xl mb-3">Crear Cuenta</p>

        <FormField id="nombre" label="Nombre: " type="input" size="small" />

        <FormField
          id="apellidos"
          label="Apellidos: "
          type="input"
          size="small"
        />

        <FormField id="edad" label="Edad: " type="number" size="small" />

        <FormField id="pais" label="País: " type="input" size="small" />

        <FormField
          id="username"
          label="Nombre de usuario: "
          type="input"
          size="small"
        />

        <FormField
          id="email"
          label="Correo electrónico: "
          type="email"
          size="small"
        />

        <FormField
          id="password"
          label="Contraseña: "
          type="password"
          size="small"
        />
        <Link to="/">
          <button className="button theme">Continuar</button>
        </Link>
      </form>

      <Bienvenida message="Crear nueva cuenta para continuar" />
    </section>
  );
};

export default CrearCuenta;
