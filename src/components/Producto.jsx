import React from 'react'
import box from "../img/box.png"
import { Link } from "react-router-dom";

const Box = () => {
    return(
        <div className="border-2 border-blueGray-400 p-2 mb-2">
            <img src={box} alt="box" className="w-10"></img>
        </div>
    )
}

const Producto = () => {
    return (
        <section className="flex flex-row w-11/12 h-4/5 px-4 py-6 my-10 bg-blueGray-100 mx-auto text-blueGray-900">
            <div className="flex flex-col">
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
            <div className="flex-grow flex flex-row justify-center">
                <img src={box} alt="" className="w-72"></img>
            </div>
            <div className="flex flex-col justify-around pr-20">
                <div>
                    <em className="text-2xl font-medium">Nombre del Producto</em>
                    <div className="text-blue-600 flex flex-row items-center mt-2 text-sm">
                        <i class="fas fa-star"/>
                        <i class="fas fa-star"/>
                        <i class="fas fa-star"/>
                        <i class="fas fa-star"/>
                        <i class="fas fa-star"/>
                        <p className="text-xs text-blueGray-500 ml-2">Número de opiniones</p>
                    </div>
                </div>
                <div>
                    <strong className="text-3xl font-light mb-1">$ Precio</strong>
                    <p className="text-sm mb-2">IVA incluido</p>
                    <p className="text-sm text-blue-700">Ver metodos de pago</p>
                </div>
                <ul className="text-lg">
                    Descripción del producto
                    <li className="text-sm my-2 list-disc">El producto incluye ...</li>
                    <li className="text-sm mb-2 list-disc">El producto es de ...</li>
                </ul>
            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex flex-col border border-blueGray-300 mb-4 p-4">
                    <span className=" text-green-600"><i class="fas fa-shuttle-van"/> Envío a todo el país</span>
                    
                    <strong className="my-2">Stock disponible</strong>
                    <p>Cantidad: <strong>1 unidad</strong></p>
                    <Link to="/comprar" className=" bg-gradient-to-r from-blue-800 via-indigo-800 to-indigo-900 text-white rounded-lg my-4 text-center">
                        <button className="px-2 py-3">Comprar ahora</button>
                    </Link>
                    <button className="px-2 py-3 bg-gradient-to-r from-blue-500 via-blue-600  to-indigo-500 text-white rounded-lg">Agregar al carrito</button>
                </div>

                <div className="flex flex-col border border-blueGray-300 p-4">
                    <p className="text-xl font-light text-center mb-4">Información de la tienda</p>
                    <em className="mb-2">Nombre tienda</em>
                    <em className="mb-2">Número de ventas</em>
                    <p className="text-sm text-blue-700">Ver más datos de la tienda</p>
                </div>
            </div>
        </section>
    )
}

export default Producto
