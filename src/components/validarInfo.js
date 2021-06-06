/* eslint-disable */
export default function validateInfo(values) {
  let errors = {};
  const regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const regex_date = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  if (!values.nombreUsuario.trim()) {
    errors.nombreUsuario = "Nombre de usuario faltante";
  }

  if (!values.apellidoUsuario.trim()) {
    errors.apellidoUsuario = "Apellido de usuario faltante";
  }

  if (!values.fechaNacimiento ) {
    errors.fechaNacimiento = "Fecha de nacimiento faltante";
  } else if (!regex_date.test(values.fechaNacimiento)) {
    errors.fechaNacimiento = "Formato de fecha no válido (use dd/mm/yyyy)";
  } else {
     if (getAge(values.fechaNacimiento) < 18) {
         errors.fechaNacimiento = "Sólo mayores de edad pueden crear una cuenta."
     }
  }

  if (!values.email) {
    errors.email = "Email faltante";
  } else if (!regex_email.test(values.email)) {
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
