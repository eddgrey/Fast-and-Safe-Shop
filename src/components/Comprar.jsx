import React from 'react'
import box from "../img/box.png"

const Comprar = () => {
    return (
        <section className="flex flex-row py-6 px-8 h-4/5">
            <div className="w-4/5 mr-8">
                <strong className="text-2xl font-semibold text-blueGray-800">Revisa y confirma tu compra</strong>
                <div className="border border-blueGray-400 mt-6 bg-blueGray-100">
                    <div className="w-1/2 px-4 py-4">
                        <h2 className="text-lg font-semibold text-gray-800">Domicilio</h2>
                        <div className="flex flex-row justify-between items-center mt-4">
                            <span className="text-blue-700 text-xl mx-8"><i class="fas fa-map-marker-alt"></i></span>
                            <div>
                                <p className="font-normal">CP</p>
                                <p className="text-sm text-blueGray-500">Calle</p>
                                <p className="text-sm text-blueGray-500">Nombre</p>
                                <p className="text-sm text-blueGray-500">Tel.</p>
                            </div>
                            <p className="text-blue-700 ml-24">Modificar</p>
                        </div>
                    </div>
                    <div className="w-1/2 px-4 py-4">
                        <h2 className="text-lg font-semibold text-blueGray-800">Método de pago</h2>
                        <div className="flex flex-row justify-between items-center mt-6">
                            <span className="text-blue-600 text-xl ml-8"><i class="far fa-credit-card"></i></span>
                            <div>
                                <em>Nombre del método de pago</em>
                                <p className="text-sm text-blueGray-500">El pago se hará a través de...</p>
                            </div>
                            <p className="text-blue-600 ">Modificar</p>
                        </div>
                        <p className="text-sm text-blueGray-500 pl-6 pt-3">No demores en pagar, solo podemos reservarte stock cuando el pago se acredite</p>
                    </div>
                </div>
                <div className="flex flex-col border border-blueGray-400 px-4 py-4 mt-8 bg-blueGray-100">
                    <h2 className=" text-green-700 text-lg font-semibold mb-6">Fecha de entrega: ___________</h2>
                    <div className="flex-grow flex flex-row ml-4">
                        <img src={box} alt="box" className="w-14"></img>
                        <div className="ml-4 flex flex-col justify-beetwen">
                            <em className="text-lg font-semibold text-blueGray-800">Nombre del producto</em>
                            <strong className="text-red-700">$Precio</strong>
                            <p className="font-medium b-2">Cantidad: 1</p>
                            <p className="text-sm text-gray-500 mb-2">Vendido por <em>Nombre de la Tienda</em> </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex flex-col justify-around w-1/5 border border-blueGray-400 p-4 h-full mt-14 bg-blueGray-100">
                <button className="px-2 py-2 bg-gradient-to-r from-blue-800 via-indigo-800 to-indigo-900 text-white rounded-xl mb-4">Confirmar compra</button>
                <h2 className=" font-semibold mb-4 text-blueGray-900">Resumen del pedido</h2>
                <p className="text-blueGray-900">Productos: <strong className="ml-8">$0.00</strong></p>
                <p className="text-blueGray-900">Envío: <strong className="ml-16">$0.00</strong></p>
                <strong className="text-red-700 border-t-2 border-blueGray-500 text-xl pt-2 mt-2">Total $0.0</strong>
            </div>
        </section>
    )
}

export default Comprar
