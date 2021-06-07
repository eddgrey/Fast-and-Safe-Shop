/* eslint-disable */
import { useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    nombreUsuario: "",
    apellidoUsuario: "",
    fechaNacimiento: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState (false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
