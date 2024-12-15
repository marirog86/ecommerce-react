import React from 'react'

const Item = ( {product}) => {
    return (
        <div className='item'>
            <img src={product.imagen} width={200} alt="" />
            <p>{product.nombre}</p>
            <p>Precio: $ {product.precio}</p>
        </div>
    )
}

export default Item