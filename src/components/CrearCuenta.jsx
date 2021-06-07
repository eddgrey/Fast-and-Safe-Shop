import FormField from "./FormField";
import Bienvenida from "./Bienvenida";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";

const CrearCuenta = () => {
  const nombreRef = useRef(null);
  const apellidoRef = useRef(null);
  const fechaNamcimientaRef = useRef(null);
  const entidadFederativaRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const historial = useHistory();
  const showError = () => toast.error("Complete los campos faltantes");
  const removeQue = () => toast.clearWaitingQueue();

  const handleSumbit = (e) => {
    e.preventDefault();
    if (nombreRef.current.value.length === 0) {
      console.log("error");
      showError();
    } else {
      historial.push("/");
    }
    removeQue();
  };

  return (
    <section className="w-full h-screen flex flex-row bg-blueGray-800">
      <form onSubmit={handleSumbit} className="login">
        <p className=" text-3xl mb-3">Crear Cuenta</p>

        <FormField
          id="nombre"
          label="Nombre: "
          type="input"
          size="small"
          refInput={nombreRef}
        />

        <FormField
          id="apellidos"
          label="Apellidos: "
          type="input"
          size="small"
          refInput={apellidoRef}
        />

        <FormField
          id="fechaNacimiento"
          label="Fecha de nacimiento: "
          type="date"
          size="small"
          refInput={fechaNamcimientaRef}
        />

        <FormField
          id="entidadFederativa"
          label="Entidad federativa: "
          type="input"
          size="small"
          refInput={entidadFederativaRef}
        />

        <FormField
          id="email"
          label="Correo electrónico: "
          type="email"
          size="small"
          refInput={emailRef}
        />

        <FormField
          id="password"
          label="Contraseña: "
          type="password"
          size="small"
          refInput={passwordRef}
        />
        <button className="button theme" type="submit" onClick={handleSumbit}>
          Continuar
        </button>
      </form>

      <Bienvenida message="Crear nueva cuenta para continuar" />
      <ToastContainer limit={1} />
    </section>
  );
};

export default CrearCuenta;
