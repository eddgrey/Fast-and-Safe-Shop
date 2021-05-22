import React from 'react'
import muebles from "../img/muebles.jpg"
import deporte from "../img/deporte.jpg"
import computacion from "../img/computacion.jpg"
import belleza from "../img/belleza.jpg"
import celulares from "../img/celulares.jpg"
import ropa from "../img/ropa.jpg"

import { Link } from "react-router-dom";

const Categoria = ({ nombre , imgURL}) => {
    return(
        <section className="flex flex-col justify-around items-center bg-blueGray-100 w-1/4 h-3/5 mr-2 mb-6 px-6 py-6 border rounded-xl">

            <h2 className="text-blueGray-900 text-xl font-semibold mb-2 tracking-wide">{ nombre }</h2>

            <img src={imgURL} alt={nombre} className="object-contain h1/2"/>

            <Link to="/verProducto">
                <p className="text-blue-800 text-lg pt-2">Ver más</p>
            </Link>

        </section>
    )
}

const Catalogo = () => {
    
    return (
        <section className="w-full h-screen">
            <h2 className="text-blueGray-900 text-3xl uppercase font-medium mb-2 tracking-wider px-12 pt-4">Categorías</h2>
            <section className="flex flex-row justify-around flex-wrap w-full  pt-4 bg-blueGray-200">
                <Categoria nombre="Muebles" imgURL={muebles} />
                <Categoria nombre="Deporte" imgURL={deporte} />
                <Categoria nombre="Computación" imgURL={computacion} />
                <Categoria nombre="Belleza" imgURL={belleza} />
                <Categoria nombre="Celulares" imgURL={celulares} />
                <Categoria nombre="Ropa" imgURL={ropa} />
            </section>
        </section>
    )
}

export default Catalogo
