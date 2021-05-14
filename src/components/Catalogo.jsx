import React from 'react'
import box from "../img/box.png"

const Catalogo = () => {
    const showProduct = () => {
        
    }

    return (
        <div className="flex flex-col items-center border border-blueGray-400  bg-coolGray-300 w-60 py-4" onClick={showProduct}>
            <img src={box} alt="box" className=" w-40 border-b border-gray-100 mb-4"></img>
            <h2>$121.99</h2>
            <p>Nombre del Producto</p>
        </div>
    )
}

export default Catalogo
