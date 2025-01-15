import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    const { cart, totalPrice } = useContext(CartContext)

return (

    <div>
        <ul>
            {
                cart.map((productCart)=>(
                    <li key={productCart.id}>
                        <p>{productCart.nombre}</p> 
                    </li>
                ))
            }
        </ul>

        <h3>Total: {totalPrice()}</h3>
    </div>

)

}

export default Cart