import FormField from "./FormField";
import Bienvenida from "./Bienvenida";
import "../styles/styles.css";
//import { useHistory } from "react-router-dom";
//import { ToastContainer, toast } from "react-toastify";
//import { useRef } from "react";
// import { tipoUsuarioContext } from "../context/TipoUsuarioContext";

const CrearCuenta = () => {
  //const nombreRef = useRef(null);
  //const apellidoRef = useRef(null);
  //const fechaNamcimientaRef = useRef(null);
  //const entidadFederativaRef = useRef(null);
  //const emailRef = useRef(null);
  //const passwordRef = useRef(null);

  //const historial = useHistory();
  //const showError = () => toast.error("Complete los campos faltantes");
  //const removeQue = () => toast.clearWaitingQueue();

  /*const handleSumbit = (e) => {
    e.preventDefault();
    if (nombreRef.current.value.length === 0) {
      console.log("error");
      showError();
    } else {
      historial.push("/");
    }
    removeQue();
  };*/

  return (
    <section className="w-full h-screen flex flex-row bg-blueGray-800">
      <form className="login">
        <p className=" text-3xl mb-3">Crear Cuenta</p>

        <FormField
          id="nombre"
          label="Nombre: "
          type="text"
          size="small"
          name="nombreUsuario"
        />

        <FormField
          id="apellidos"
          label="Apellidos: "
          type="text"
          size="small"
          name="apellidoUsuario"
        />

        <FormField
          id="fechaNacimiento"
          label="Fecha de nacimiento: "
          type="date"
          size="small"
          name="fechaNacimiento"
        />

        <FormField
          id="email"
          label="Correo electrónico: "
          type="email"
          size="small"
          name="email"
        />

        <FormField
          id="password"
          label="Contraseña: "
          type="password"
          size="small"
          name="password"
        />

        <FormField
          id="password2"
          label="Confirmar contraseña: "
          type="password2"
          size="small"
          name="password2"
        />
        <span className="otro_link">
          ¿Ya tienes una cuenta? Inicia sesión 
          <a className="link_login" href="/login">
            Aquí
          </a>
        </span>
        <button className="button theme" type="submit">
          Continuar
        </button>
      </form>
      <Bienvenida message="Crear nueva cuenta para continuar" />
    </section>
  );
};

export default CrearCuenta;
