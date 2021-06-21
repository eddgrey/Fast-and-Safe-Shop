/* eslint-disable */
import Bienvenida from "./Bienvenida";
import { ToastContainer, toast } from 'react-toastify';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import Constantes from '../Constantes.js';
import useForm from "./useForm";
import validate from "./validarInfo";
import "../styles/styles.css";
import { Link } from "react-router-dom";


class CrearCuenta extends Component {

  constructor(props){
    super(props);
    this.state={
      usuario:{
        nombre:'',
        apellido:'',
        correo:'',
        clave:'',
        nacimiento:'',
        estado:'',
      }
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  async handleSubmit(e) {
    e.preventDefault();

    const usuario = JSON.stringify(this.state.usuario);
    console.log(usuario);
    const correo_respuesta = await fetch(`${Constantes.RUTA_API}/Validate_Email.php`, {
        method: "POST",
        body: usuario,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    console.log("HOLA");
    const json = await correo_respuesta.json();
   
    if (json.registro === false) {
        toast.error('Correo ya registrado 📧 ', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } else {
        //Codificamos como JSON el usuario
        const cargaUtil = JSON.stringify(this.state.usuario);
        //Enviamos Datos
        const respuesta = await fetch(`${Constantes.RUTA_API}/SignUp_.php`, {
            method: "POST",
            body: cargaUtil,
        });

        const exitoso = await respuesta.json();
        

        if (exitoso) {
            

            this.setState({
                usuario: {
                    nombre: '',
                    apellido: '',
                    nacimiento: '',
                    correo: '',
                    clave: '',
                    estado:'',
                    tipoUsuario:'',
                }
            });

            const resultado = await Swal.fire({
              title: 'Se ha registrado con éxito',
              icon: 'sucess',
              showCancelButton: false,
              confirmButtonColor: '#3298dc',
              cancelButtonColor: '#f14668',
              cancelButtonText: 'No',
              confirmButtonText: 'Iniciar sesion'
          });
          // Si no confirma, detenemos la función
          if (!resultado.value) {
              return;
          }


            this.props.history.push({
              pathname: "/login",
          });

        } else {
            toast.error('Error, intente de nuevo 😔 ', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }
}


handleInput(e) {
    const clave = e.target.id;
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
          <p className=" text-3xl mb-3">Crear Cuenta</p>
          <div className={separate}>
            <label className={labelForm}>Nombre: *</label>
            <input
              className={inputForm}
              id="nombre"
              required type="text"
              name="nombreUsuario"
              value={this.state.usuario.nombre}
              
              onChange={this.handleInput}
            />
          </div>

          <div className={separate}>
            <label className={labelForm}>Apellido: *</label>
            <input
              className={inputForm}
              id="apellido"
              type="text"
              pattern="[A-Za-z]{3,15}"
              name="apellidoUsuario"
              required
              title="Sólo caracteres alfabéticos, mínimo 3, sin acentos. SOLO UN APELLIDO"
              value={this.state.usuario.apellido}
              onChange={this.handleInput}
            />
          </div>

          <div className={separate}>
            <label className={labelForm}>Fecha de Nacimiento: *</label>
            <input
              className={inputForm}
              id="nacimiento"
              type="date"
              name="nacimiento"
              required
              value={this.state.usuario.nacimiento}
              onChange={this.handleInput}
              
            />
          </div>

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
            <label className={labelForm}>Entidad Federativa: *</label>
            <input
              className={inputForm}
              id="estado"
              type="text"
              required
              name="fechaNacimiento"
              value={this.state.usuario.estado}
              onChange={this.handleInput}
            />
          </div>

          <div className={separate}>
            <label className={labelForm}>Contraseña: *</label>
            <input
              className={inputForm}
              type="password"
              name="clave"
              required
              id="clave"
              value={this.state.usuario.clave}
              onChange={this.handleInput}
            />
          </div>

          <div className={separate}>
            <label className={labelForm}>Confirmar Contraseña: *</label>
            <input
              className={inputForm}
              type="password"
              name="clave"
              required
            />
          </div>

          

          <span className="otro_link">
            ¿Ya tienes una cuenta? Inicia sesión
            <Link className="link_login" to="/login">
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

export default withRouter(CrearCuenta);
