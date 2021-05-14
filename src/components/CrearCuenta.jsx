import React from 'react'
import img from "../img/city.jpg"

const CrearCuenta = () => {
    const inputClass = "py-2 pl-4 focus:outline-none border-b border-blueGray-50 bg-blueGray-800 w-full"

    const handleSumbit = (e) => {
        e.preventDefault()
        
    }
{/* <img src={img} alt="img" className="w-2/5 h-full object-cover object-right"></img> */}
    return (
        <section className="w-full h-screen flex flex-row bg-blueGray-800">
            <form onSubmit={handleSumbit} className="flex flex-col items-center px-20 pt-16 w-3/5 text-blueGray-300">
                <p className=" text-3xl mb-4">Crear Cuenta</p>

                <div className="flex flex-col w-full mb-6">
                    <label htmlFor="nombre" className="mb-2 text-sm">Nombre: </label>
                    <input id="nombre" type="input" className="py-1 pl-2 text-lg focus:outline-none w-full border-b-2 border-blueGray-600 bg-blueGray-800"/>
                </div>

                <div className="flex flex-col w-full mb-6">
                    <label htmlFor="nombre" className="mb-2 text-sm">Apellido: </label>
                    <input id="nombre" type="input" className="py-1 pl-2 text-lg focus:outline-none w-full border-b-2 border-blueGray-600 bg-blueGray-800"/>
                </div>

                <div className="flex flex-col w-full mb-6">
                    <label htmlFor="nombre" className="mb-2 text-sm">E-mail: </label>
                    <input id="nombre" type="email" className="py-1 pl-1 text-lg focus:outline-none w-full border-b-2 border-blueGray-600 bg-blueGray-800"/>
                </div>

                <div className="flex flex-col w-full mb-12">
                    <label htmlFor="nombre" className="mb-2 text-sm">Password: </label>
                    <input id="nombre" type="password" className="py-1 pl-1 text-lg focus:outline-none w-full border-b-2 border-blueGray-600 bg-blueGray-800"/>
                </div>
 
                <button className="bg-gradient-to-r from-blue-800 via-indigo-800 to-indigo-900 text-white px-8 py-3  rounded-xl mt-2">Continuar</button>
            </form>
            <div className="w-2/5 bg-gradient-to-r from-blue-800 via-indigo-800 to-indigo-900 text-white flex flex-col items-center justify-center">
                <div>
                    <p className="text-lg uppercase font-extralight tracking-widest">Bienvenido a</p>
                    <h2 className=" text-5xl mt-6 mb-10 font-medium"> Fast&Safe Shop</h2>
                    <p className="border-t-2 border-white pt-6">Crea cuenta para continuar</p>
                </div>
            </div>
        </section>
    )
}

export default CrearCuenta
