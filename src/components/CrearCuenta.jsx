/* eslint-disable */
import Bienvenida from "./Bienvenida";
import useForm from "./useForm";
import validate from "./validarInfo";
import "../styles/styles.css";

const CrearCuenta = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
  const rowForm = "w-full h-screen flex flex-row bg-blueGray-800";
  const labelForm = "w-1/4 text-sm uppercase tracking-wide";
  const separate = "flex flex-row w-full mb-2 justify-between";
  const inputForm = "input-dark pl-2  w-3/4 ";

  return (
    <section className={rowForm}>
      <form className="login" onSubmit={handleSubmit} noValidate>
        <p className=" text-3xl mb-3">Crear Cuenta</p>
        <div className={separate}>
          <label className={labelForm}>Nombre: *</label>
          <input
            className={inputForm}
            id="nombreUsuario"
            type="text"
            name="nombreUsuario"         
            value={values.nombreUsuario}
            required
            onChange={handleChange}
          />
        </div>
        {errors.apellidoUsuario && (<p className="alerta">{errors.nombreUsuario}</p>)}
        <div className={separate}>
          <label className={labelForm}>Apellido: *</label>
          <input
            className={inputForm}
            id="apellidoUsuario"
            type="text"
            pattern="[A-Za-z]{3,15}"
            name="apellidoUsuario"
            title="Sólo caracteres alfabéticos, mínimo 3, sin acentos. SOLO UN APELLIDO"
            value={values.apellidoUsuario}
            onChange={handleChange}
          />
        </div>
        {errors.apellidoUsuario && (<p className="alerta">{errors.apellidoUsuario}</p>)}
        <div className={separate}>
          <label className={labelForm}>Fecha de Nacimiento: *</label>
          <input
            className={inputForm}
            id="fechaNacimiento"
            type="date"
            name="fechaNacimiento"
            value={values.fechaNacimiento}
            onChange={handleChange}
          />
        </div>
        {errors.fechaNacimiento && (<p className="alerta">{errors.fechaNacimiento}</p>)}
        <div className={separate}>
          <label className={labelForm}>Correo electrónico: *</label>
          <input
            className={inputForm}
            id="email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p className="alerta">{errors.email}</p>}
        <div className={separate}>
          <label className={labelForm}>Contraseña: *</label>
          <input
            className={inputForm}
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && <p className="alerta">{errors.password}</p>}
        <div className={separate}>
          <label className={labelForm}>Contraseña: *</label>
          <input
            className={inputForm}
            id="password2"
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
          />
        </div>
        {errors.password2 && <p className="alerta">{errors.password2}</p>}
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
