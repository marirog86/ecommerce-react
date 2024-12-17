import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../data/data.js'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [{product, setProduct}]=useState({})
    const {idProduct}=useParams()
    useEffect(()=>{
        getProducts()
            .then((data)=>{
                const productoFiltrado = data.find((datoProducto)=>datoProducto.id === idProduct)
                setProduct(productoFiltrado)
            })
    },[])
    return (
    
        <ItemDetail product = {product} />
    
    )
}

export default ItemDetailContainer
