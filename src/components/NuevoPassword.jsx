import { useHistory } from "react-router-dom";
import Bienvenida from "./Bienvenida";
import { ToastContainer, toast } from "react-toastify";
import FormField from "./FormField";
import { useRef } from "react";

const NuevoPassword = () => {
  const historial = useHistory();
  const passwordRef = useRef(null);
  const newPasswordRef = useRef(null);

  const successMessage = () => toast.success("seccess");
  const errorMessage = () => toast.error("Complete los campos faltantes");
  const removeQue = () => toast.clearWaitingQueue();

  const handleSumbit = (e) => {
    e.preventDefault();
    if (
      passwordRef.current.value !== newPasswordRef.current.value ||
      passwordRef.current.value.length === 0 ||
      newPasswordRef.current.value.length === 0
    ) {
      errorMessage();
    } else {
      successMessage();
      historial.push("/");
    }
    removeQue();
  };

  return (
    <section className="w-full h-screen flex flex-row bg-blueGray-800">
      <form
        onSubmit={handleSumbit}
        className="flex flex-col items-center px-20 pt-12 pb-14 w-full md:w-3/5 text-blueGray-100 justify-around"
      >
        <p className=" text-3xl mb-10">Nueva contraseña</p>
        <div className="w-3/4">
          <FormField
            id="newPassword"
            label="Nueva contraseña:"
            type="password"
            size="meduim"
            refInput={passwordRef}
          />

          <FormField
            id="password"
            label="Confirmar contraseña:"
            type="password"
            size="meduim"
            refInput={newPasswordRef}
          />
        </div>
        <button className="button theme" type="submit">
          Continuar
        </button>
      </form>

      <Bienvenida message="Establecer nueva contraseña para continuar" />
      <ToastContainer limit={1} />
    </section>
  );
};

export default NuevoPassword;
