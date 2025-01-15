import "./CartWidget.css"
import imgCarrito from '../img/shopping-bag.png'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = ()=> {
    const { totalQuantity } = useContext(CartContext)
    
    return (
        <Link to="/cart" className="carrito" >
        <img src={imgCarrito} alt="" />
        <span className="numero">{totalQuantity()}</span>
        </Link>
    )
}

export default CartWidget