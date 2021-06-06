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

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
