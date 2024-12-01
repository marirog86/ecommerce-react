import "./CartWidget.css"
import imgCarrito from './img/shopping-bag.png'


const CartWidget = ()=> {
    return (
        <div className="carrito" >
        <img src={imgCarrito} alt="" />
        <span className="numero">1</span>
        </div>
    )
}

export default CartWidget