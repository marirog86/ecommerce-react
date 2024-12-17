import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    return (
    <div className='ItemDetail'>
        <img src={product.imagen} alt='' />
        <div className='info'>
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
        <p>Precio:${product.precio}</p>
        </div>
    </div>
    )
}

export default ItemDetail
