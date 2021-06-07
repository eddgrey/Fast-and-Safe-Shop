/* eslint-disable */
import React, { useState } from "react";
import CrearCuenta from "./CrearCuenta";
import CuentaExitosa from "./CuentaExitosa";

const Formulario = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function  submitForm() {
      setIsSubmitted(true);
  }

  return (
    <div>
    {!isSubmitted ? <CrearCuenta submitForm = {submitForm}/> : <CuentaExitosa />}
    </div>
  );
};

export default Formulario;