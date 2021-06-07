/* eslint-disable react/prop-types */
import { useContext, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { tipoUsuarioContext } from "../context/TipoUsuarioContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Bienvenida from "./Bienvenida";
import FormField from "./FormField";
import { messageToShowContext } from "../context/MessageToShowContext";

const Login = () => {
  const { setTipoUsuario } = useContext(tipoUsuarioContext);
  const { messageToShow, setMessageToShow } = useContext(messageToShowContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const historial = useHistory();
  const messageId = useRef(null);

  useEffect(() => {
    console.log(messageToShow);
    if (messageToShow.length > 0) {
      (() => toast.info(messageToShow))();
      setTimeout(setMessageToShow(""), 5000);
    }
  }, []);

  const notify = () =>
    (messageId.current = toast.info("Cargando...", { autoClose: 3000 }));

  const showError = () =>
    (messageId.current = toast.error("Complete los campos faltantes"));

  const updateMessage = () =>
    toast.update(messageId.current, {
      type: toast.TYPE.SUCCESS,
      render: "La operacion ha sido realizada correctamente.",
      autoClose: 5000,
    });

  const removeQue = () => toast.clearWaitingQueue();

  const handleSumbit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.length === 0 || password.length === 0) {
      showError();
    } else {
      console.log("redirect", notify, historial, updateMessage);
      notify();
      if (email === "admin@email.com") {
        setTipoUsuario("administrador");
      } else if (email === "comprador@email.com") {
        setTipoUsuario("comprador");
      } else {
        setTipoUsuario("vendedor");
      }
      setMessageToShow("Bienvenido");
      setTimeout(updateMessage, 4000);
      setTimeout(
        () => historial.push(email === "admin@email.com" ? "/usuarios" : "/"),
        2000
      );
    }
    removeQue();
  };

  return (
    <section className="w-screen min-h-screen flex flex-row bg-blueGray-800">
      <form onSubmit={handleSumbit} className="login">
        <p className=" text-3xl mb-10">Iniciar sesión</p>
        <div className="w-3/4">
          <FormField
            id="email"
            label="Correo electrónico: "
            type="email"
            size="large"
            refInput={emailRef}
          />

          <FormField
            id="password"
            label="Contraseña: "
            type="password"
            size="large"
            refInput={passwordRef}
          />
        </div>

        <span className="otro_link">
          ¿No tienes cuenta? Crea una
          <a className="link_login" href="/registro">
            Aquí
          </a>
        </span>
        <button className="button theme" type="submit">
          Continuar
        </button>

        <Link to="/recuperar">
          <p className="text-sm">¿Olvidó su contraseña?</p>
        </Link>
      </form>
      <Bienvenida message="Iniciar sesión para continuar" />
      <ToastContainer limit={1} />
    </section>
  );
};

export default Login;
