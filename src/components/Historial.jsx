import React from 'react'
import box from '../img/box.png'
import Producto from "./Producto"

const Historial = () => {
    return (
        <section className="w-screen h-full flex flex-col justify-between">
            <div className="flex flex-row justify-between items-center border py-8 px-10">
                <h2 className="text-blueGray-900 text-3xl">Historial de pedidos</h2>

                <button className="theme button font-medium">Borrar historial</button>
            </div>

            <section className="flex flex-row justify-around pt-6">
                <Producto img={box}/>
                
                <Producto img={box}/>

                <Producto img={box}/>

                <Producto img={box}/>

                <Producto img={box}/>
            </section>
        </section>
    )
}

export default Historial
