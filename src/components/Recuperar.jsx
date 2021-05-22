import React from 'react'
import Bienvenida from './Bienvenida'

const Recuperar = () => {
    return (
        <section className="w-full h-screen flex flex-row bg-blueGray-800">
            <form className="flex flex-col items-center px-20 pt-12 pb-14 w-3/5 text-blueGray-100 justify-around">
                
                <h2 className=" text-3xl mb-10">Restablecer contraseña</h2>
                
                <div className="w-3/4">
                    <div className="flex flex-col w-full mb-12">
                        <label htmlFor="nombre" className="mb-2 text-sm uppercase tracking-wider">Correo electrónico :</label>
                        <input id="nombre" type="email" className="py-1 pl-1 text-lg focus:outline-none w-full border-b-2 border-blueGray-600 bg-blueGray-800"/>
                    </div>

                </div>
                <button className="button theme">Continuar</button>

            </form>

            <Bienvenida message="Ingresar correo electrónico para continuar"/>
        </section>
    )
}

export default Recuperar
