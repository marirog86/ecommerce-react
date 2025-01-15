import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {product}) => {
    return (
        <Link to={"/detail/"+product.id} className='item'>
            <img src={product.imagen} alt="" />
            <h2>{product.nombre}</h2>
            <p>Precio: $ {product.precio}</p>
            <button className='boton'>Mas info</button>
        </Link>
    )
}

export default Item