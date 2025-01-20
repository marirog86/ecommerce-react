import React, { useEffect } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
    const [showItemCount, setShowItemCount]=useState(true)

    const {addProduct} = useContext(CartContext)

    const addProductToCart = (count) => {
        const productCart={...product, quantity: count}
        addProduct(productCart)
        setShowItemCount(false)
    }

    // Verificar si el producto está cargado
    if (!product || !product.nombre) {
        return <div>Cargando...</div>;
    }
    
    return (
    <div className='ItemDetail'>
        <img src={product.imagen} alt='' />
        <div className='info'>
            <h2>{product.nombre}</h2>
            <p>{product.descripcion}</p>
            <p>Precio: {product.precio}</p>
            {
                showItemCount === (true) ? (
                    <ItemCount stock={product.stock} addProductToCart={addProductToCart} />
                ) : (
                        <Link to="/cart"><button className='botonDetail'>Finalizar compra</button></Link>
                    
                )
            }
        </div>
    </div>
    )
}

export default ItemDetail
