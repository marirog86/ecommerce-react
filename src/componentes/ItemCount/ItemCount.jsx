import { useState } from 'react'
import './ItemCount.css'
import { Link } from 'react-router-dom'

const ItemCount = ( {stock, addProductToCart}) => {
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
                <button className='botonDetail' onClick={()=>addProductToCart(count)}>Agregar al carrito</button>
                
            </div>
        </div>
        
    )
}

export default ItemCount


