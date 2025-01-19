import { useState, useContext } from "react"
import FormCheckout from "./FormCheckout"
import { CartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"

const Checkout = () => {
    const [dataForm, setDataForm]=useState({
        fullname: "",
        phone: "",
        email: "",
    })

    const [orderId, setOrderId]=useState(null)

    const {cart, totalPrice, deleteCart}=useContext(CartContext)

    const handleChangeDataForm =(event)=>{
        setDataForm({...dataForm, [event.target.name] : event.target.value})
    }

    const handleSubmitForm =async(event)=>{
        event.preventDefault()
        const order = {
            buyer: {...dataForm},
            products: [...cart],
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        }
        await uploadOrder(order)
    }

    const uploadOrder=async(newOrder)=>{
        try{
            const ordersRef = collection(db, "orders")
            const response = await addDoc(ordersRef, newOrder)
            setOrderId(response.id)
            deleteCart()
        }catch(error){
            console.log(error)
        }

    }

    return (
        <div>
            {
                orderId ? (
                    <div>
                        <h2>Orden enviada correctamente. Su numero de orden es:</h2>
                        <h3>{orderId}</h3>
                    </div>
                ):(
                    <FormCheckout 
                    dataForm = {dataForm}
                    handleChangeDataForm = {handleChangeDataForm}
                    handleSubmitForm = {handleSubmitForm}
                    />
                )
            }
        </div>
    )
}

export default Checkout