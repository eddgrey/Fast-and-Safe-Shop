import React from 'react'
import box from "../img/box.png"

const ProductoEnCarrito = () => {
    return(
        <section className="border-b border-blueGray-400 py-8">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                    <img src={box} alt="box" className=" w-14"></img>
                    <div className="ml-4">
                        <em className="text-lg font-medium">Nombre del producto</em>
                        <p className=" text-green-800 font-semibold text-base">Costo de envío</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="border border-blueGray-400 flex flex-row items-center mb-4">
                        <button className="bg-white h-full px-2 text-2xl text-blue-700" >-</button>
                        <input  className="bg-white h-full w-20 text-xl text-center" type="input" defaultValue="1"></input>
                        <button className="bg-white h-full px-2 text-2xl text-blue-700" >+</button>
                    </div>
                    <p className="text-sm">Cantidad</p>
                </div>
                <p className="text-2xl font-medium">$Precio</p>
            </div>
            <div className="flex flex-row w-1/2 text-blue-700 pt-6 pl-10">
                <p>Eliminar</p>
            </div>
        </section>
    )
}

const Carrito = () => {
    return (
        <section className="mx-auto mt-10 w-11/12 min-h-screen  py-6 px-10 bg-blueGray-100 text-blueGray-900">
            <h1 className="text-2xl font-medium">Carrito de compras</h1>
                <ProductoEnCarrito />
                <ProductoEnCarrito />
            <div className="mb-4 border-b border-blueGray-400 flex flex-row justify-end py-8 text-2xl font-medium">
                <p className=" mr-40">Total con envío</p>
                <p>$Total</p>
            </div>
            <div className="flex flex-row justify-end pt-8">
                <button className="button theme mb-2">Continuar compra</button>
            </div>
        </section>
    )
}

export default Carrito
