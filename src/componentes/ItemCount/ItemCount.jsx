import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ( {stock, AddProductToCart}) => {
    const [count, setCount] =useState(1)

    const handleClickAdd = () => {
        if (count < stock){
            setCount(count+1)
        }
        
    }

    const handleClickRemove = () => {
        if (count>1) {
            setCount(count-1)
        }
        
    }

    return (
        <div className="add">
            <div className='cant'>
                <button onClick={handleClickRemove}>-</button> 
                <p>{count}</p>
                <button onClick={handleClickAdd}>+</button>
            </div>
            <div className='botones'>
                <button className='botonDetail' onClick={()=>AddProductToCart(count)}>Agregar al carrito</button>
                <button className="botonDetail">Finalizar Compra</button>
            </div>
        </div>
        
    )
}

export default ItemCount


