
import "./ItemListContainer.css"
import { getProducts } from "../../data/data.js"
import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const { idCategory} = useParams()
    useEffect(()=>{
        getProducts()
        .then((data) => {
            if (idCategory){
                const productosFiltrados = data.filter((product) => product.categoria === idCategory)
                setProducts(productosFiltrados)
            }else{
                setProducts(data)
            }
            
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(()=>{
            console.log('promesa terminada')
        })
    },[idCategory])
    return (
        <div className="itemListContainer">
            <h2>{greetings}</h2>
            <ItemList products={products} />
        </div>
    
    )
}

export default ItemListContainer