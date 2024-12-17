import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {product}) => {
    return (
        <Link to={"/detail/"+product.id} className='item'>
            <img src={product.imagen} alt="" />
            <p>{product.nombre}</p>
            <p>Precio: $ {product.precio}</p>
        </Link>
    )
}

export default Item