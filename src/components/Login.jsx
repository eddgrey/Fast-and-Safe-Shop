/* eslint-disable react/prop-types */
/* eslint-disable */
import React, { useContext, useRef, useEffect, Component } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import Constantes from '../Constantes.js';
import { tipoUsuarioContext } from "../context/TipoUsuarioContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Bienvenida from "./Bienvenida";
import FormField from "./FormField";
import { messageToShowContext } from "../context/MessageToShowContext";

class Login extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      usuario: {
        email: '',
        clave: ''
      }

    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    
    e.preventDefault();
    console.log("hola");
    const usuario = JSON.stringify(this.state.usuario);
    const usuario_respuesta = await fetch(`${Constantes.RUTA_API}/Validate_User.php`, {
        method: "POST",
        body: usuario,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const json = await usuario_respuesta.json();
    console.log(json);
    if (json[0].sesion === false) {
        toast.error('Contraseña incorrecta :( ', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } else {
        toast.success('Inicio de sesión con éxito 🎉🥳', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        this.props.history.push({
            pathname: "/",
            state: {
                email: this.state.usuario.email,
                sesion: true

            }
        });


    }


}

handleInput(e) {
    const clave = e.target.name;
    let valor = e.target.value;
    this.setState(state => {
        const UsuarioNuevo = state.usuario;
        UsuarioNuevo[clave] = valor;
        return {
            usuario: UsuarioNuevo,
        }

    });

}


  render() {
    const rowForm = "w-full h-screen flex flex-row bg-blueGray-800";
    const labelForm = "w-1/4 text-sm uppercase tracking-wide";
    const separate = "flex flex-row w-full mb-2 justify-between";
    const inputForm = "input-dark pl-2  w-3/4 ";

    return (
      <section className={rowForm}>
        <ToastContainer></ToastContainer>
        <form className="login" onSubmit={this.handleSubmit}>
          <p className=" text-3xl mb-3">Iniciar sesión</p>
          <div className={separate}>
            <label className={labelForm}>Correo electrónico: *</label>
            <input
              className={inputForm}
              id="correo"
              type="texto"
              name="email"
              required
              value={this.state.usuario.correo}
              onChange={this.handleInput}
            />
          </div>

          <div className={separate}>
            <label className={labelForm}>Contraseña: *</label>
            <input
              className={inputForm}
              id="clave"
              type="password"
              name="clave"
              required
              value={this.state.usuario.clave}
              onChange={this.handleInput}
            />
          </div>

          <span className="otro_link">
            ¿No tienes cuenta? Registrate
            <Link className="link_login" to="/CrearCuenta">
              Aquí
            </Link>
          </span>
          <button className="button theme" type="submit">
            Continuar
          </button>
        </form>
        <Bienvenida message="Crear nueva cuenta para continuar" />
      </section>
    );
  }
};

export default Login;
