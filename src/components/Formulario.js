/* eslint-disable */
import React, { useState } from "react";
import CrearCuenta from "./CrearCuenta";
import CuentaExitosa from "./CuentaExitosa";

const Formulario = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function  submitForm() {
      setIsSubmitted(true);
  }

  const addComprador = () =>{
    console.log("nuevo comprador");
  }

  return (
    <div>
    {!isSubmitted ? <CrearCuenta addOrEdit={addComprador} submitForm = {submitForm}/> : <CuentaExitosa />}
    </div>
  );
};

export default Formulario;