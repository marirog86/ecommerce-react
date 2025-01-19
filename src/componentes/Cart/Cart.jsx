import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    if (cart.length === 0){
        return(
            <div>
                <h2>Tu carrito esta vacio 🥲</h2>
                <Link to="/">Volver al inicio para comprar😊</Link>
            </div>
        )
    }
return (

    <div className='cart'>
        {
            cart.map((productCart)=>(
                    <div className='articulo'>
                        <img src={productCart.imagen} alt="" />
                        <p>{productCart.nombre}</p>
                        <p>Precio unitario: ${productCart.precio}</p>
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>Subtotal: $ {productCart.precio * productCart.quantity}</p> 
                        <button onClick={()=>deleteProductById(productCart.id)}>Eliminar</button>
                    </div> 
                ))
            
        }
        <h3>Total: $ {totalPrice()}</h3>
        <Link to="/checkout"><button>Continuar con la compra</button></Link>
        <button onClick={deleteCart}>Vaciar carrito</button>
    </div>

)

}

export default Cart