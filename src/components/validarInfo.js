export default function validateInfo(values) {
  let errors = {};

  if (!values.nombreUsuario.trim()) {
    errors.nombreUsuario = "Nombre de usuario faltante";
  }

  if (!values.apellidoUsuario.trim()) {
    errors.apellidoUsuario = "Apellido de usuario faltante";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Correo no válido";
  }
  if (!values.password) {
    errors.password = "Contraseña faltante";
  } else if (values.password.length < 8) {
    errors.password = "El contraseña debe contener 8 o más caracteres";
  }

  if (!values.password2) {
    errors.password2 = "Contraseña faltante";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Las contraseñas no coinciden";
  }
  return errors;
}
