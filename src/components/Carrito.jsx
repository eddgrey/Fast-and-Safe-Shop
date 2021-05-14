import React from 'react'
import box from "../img/box.png"

const Carrito = () => {
    return (
        <section className="boder border-red-500 mx-auto my-10 w-11/12  py-6 px-10 bg-blueGray-100 text-blueGray-900">
            <h1 className="text-2xl font-medium">Carrito de compras</h1>
            <div className="border-b border-blueGray-400 py-8">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        <img src={box} alt="box" className=" w-14"></img>
                        <em className="text-lg font-medium ml-4">Nombre del producto</em>
                    </div>
                    <div className="border border-blueGray-400 flex flex-row items-center">
                        <button className="bg-white h-full px-2 text-2xl" >-</button>
                        <input  className="bg-white h-full w-20 text-xl text-center" type="input"></input>
                        <button className="bg-white h-full px-2 text-2xl" >+</button>
                    </div>
                    <p className="text-2xl font-medium">$Precio</p>
                </div>
                <div className="flex flex-row w-1/2 text-blue-700 justify-around pt-6">
                    <p>Eliminar</p>
                    <p>Más productos del vendedor</p>
                    <p>Comprar ahora</p>
                </div>
            </div>
            <div className="mb-4 border-b border-blueGray-400 flex flex-row justify-end py-8 text-2xl font-medium">
                <p className=" mr-40">Total con envío</p>
                <p>$Total</p>
            </div>
            <div className="flex flex-row justify-end pt-8">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-800 via-indigo-800 to-indigo-900 text-white rounded-xl mb-4">Continuar compra</button>
            </div>
        </section>
    )
}

export default Carrito
