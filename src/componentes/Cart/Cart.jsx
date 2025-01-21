import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    if (cart.length === 0){
        return(
            <div className='emptyCart'>
                <h2>Tu carrito está vacio 🥲</h2>
                <Link to="/"><button>Volver al inicio para comprar😊</button></Link>
            </div>
        )
    }
return (

    <div className='cart'>
        {
            cart.map((productCart)=>(
                    <div key={productCart.id} className='articulo'>
                        <img src={productCart.imagen} alt="" />
                        <p>{productCart.nombre}</p>
                        <p>Precio unitario: ${productCart.precio}</p>
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>Subtotal: $ {productCart.precio * productCart.quantity}</p> 
                        <button className='botonEliminar' onClick={()=>deleteProductById(productCart.id)}>❌</button>
                    </div> 
                ))
            
        }
        <h3>Total: $ {totalPrice()}</h3>
        <div className='botonesCart'>
            <Link to="/checkout"><button className='botonCont'>Continuar con la compra</button></Link>
            <button className='botonVaciar' onClick={deleteCart}>Vaciar carrito</button>
        </div>
    </div>

)

}

export default Cart