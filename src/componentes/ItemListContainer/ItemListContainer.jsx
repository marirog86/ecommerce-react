
import "./ItemListContainer.css"
import { getProducts } from "../../data/data.js"
import { useState, useEffect } from "react"
import ItemList from "./ItemList"

const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        getProducts()
        .then((data) => {
            setProducts(data)
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(()=>{
            console.log('promesa terminada')
        })
    },[])
    return (
        <div className="itemListContainer">
            <h1 className="saludo">{greetings}</h1>
            <ItemList products={products} />
        </div>
    
    )
}

export default ItemListContainer