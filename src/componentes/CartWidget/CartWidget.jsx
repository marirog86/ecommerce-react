import "./CartWidget.css"
import imgCarrito from '../img/shopping-bag.png'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = ()=> {
    const { totalQuantity } = useContext(CartContext)
    
    const quantity = totalQuantity()
    
    return (
        <Link to="/cart" className="carrito" >
        <img src={imgCarrito} alt="" />
        <span className="numero">{quantity != 0 ? quantity : "" }</span>
        </Link>
    )
}

export default CartWidget