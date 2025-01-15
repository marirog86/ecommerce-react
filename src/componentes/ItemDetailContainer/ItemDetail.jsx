import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({product}) => {
    const {addProduct} = useContext(CartContext)

    const AddProductToCart = (count) => {
        const productCart={...product, quantity: count}
        addProduct(productCart)
    }

    return (
    <div className='ItemDetail'>
        <img src={product.imagen} alt='' />
        <div class='info'>
            <h2>{product.nombre}</h2>
            <p>{product.descripcion}</p>
            <p>Precio: {product.precio}</p>
            <ItemCount stock = {product.stock} AddProductToCart={AddProductToCart}/>
        </div>
    </div>
    )
}

export default ItemDetail
