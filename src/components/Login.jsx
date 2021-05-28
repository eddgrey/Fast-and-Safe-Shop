/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Bienvenida from "./Bienvenida";
import FormField from "./FormField";

// const ConditionalLink = ({ children, to, condition }) =>
//   !!condition && to ? <Link to={to}>{children}</Link> : <>{children}</>;

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const historial = useHistory();
  const notify = () => toast.success("Wow so easy !");
  const showError = () => toast.error("Wow so easy !");

  const removeQue = () => toast.clearWaitingQueue();

  const handleSumbit = (e) => {
    console.log("handle");
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.length === 0 || password.length === 0) {
      console.log("error");
      showError();
    } else {
      console.log("redirect");
      notify();
      historial.push("/");
    }
    removeQue();
    console.log(email.length);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <section className="w-screen min-h-screen flex flex-row bg-blueGray-800">
      <form
        onSubmit={handleSumbit}
        className="flex flex-col items-center px-20 py-16 w-full md:w-3/5 text-blueGray-100 justify-between"
      >
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
        <button className="button theme" type="submit">
          Continuar
        </button>
        <ToastContainer limit={4} />
        {/* <Link to="/">
        </Link> */}
        {/* <ConditionalLink to="/" condition={emailRef.current.value.len > 0}>
          Continuar
        </ConditionalLink> */}
        <Link to="/recuperar">
          <p className="text-sm">¿Olvidó su contraseña?</p>
        </Link>
      </form>
      <Bienvenida message="Iniciar sesión para continuar" />
    </section>
  );
};

export default Login;
