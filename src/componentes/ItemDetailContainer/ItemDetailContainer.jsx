import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc,getDoc } from 'firebase/firestore'
import db from '../../db/db.js'
import { Link } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct]=useState({})
    const [error, setError] = useState(false)
    const {idProduct}=useParams()

    const getProduct =async()=>{
        try{
            const docRef=doc(db, "products", idProduct)
            const dataDb=await getDoc(docRef)

            if (dataDb.exists()) {
                const data = { id: dataDb.id, ...dataDb.data() }
                setProduct(data)
            } else {
                // Producto no encontrado
                setError(true)
            }
        }catch(error){
            console.log(error)
            setError(true)
        }
    }
    useEffect(()=>{
        getProduct()

    },[idProduct])

    if (error) {
        return (
            <div className='notFound' >
                <h2>Producto no encontrado 👽</h2>
                <p>Lo sentimos, no pudimos encontrar el producto que estás buscando.</p>
                <Link to="/"><button>Volver al inicio</button></Link>
            </div>
        )
    }
    
    return  (
        <div>
            {
                product ? (
                    <ItemDetail product={product} />
                ) : (
                    <div>Cargando...</div>
                )
            }
        </div>
    )
}

export default ItemDetailContainer
