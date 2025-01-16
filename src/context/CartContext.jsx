import { createContext, useState, useEffect} from 'react'

const CartContext = createContext()

const CartProvider = ( { children }) => {
    const cartLocalStorage=JSON.parse(localStorage.getItem("cart-ecommerce"))
    const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : [] )

    useEffect(()=> {
    localStorage.setItem("cart-ecommerce", JSON.stringify(cart))
    }, [cart])
    

    const addProduct = (newProduct) => {
        const index = cart.findIndex( (productCart) => productCart.id === newProduct.id )
    
        if(index != -1){
            const auxCart = [...cart]
            auxCart[index].quantity = auxCart[index].quantity + newProduct.quantity
            setCart(auxCart)  
        }else{
            setCart( [ ...cart, newProduct ] )
            
        }

    }
    const deleteProductById=(idProduct)=>{
        const filterProducts=cart.filter((productCart)=>productCart.id!=idProduct)
        setCart(filterProducts)
    }

    const deleteCart=()=>{
        setCart([])
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart)=>total+productCart.quantity, 0)
        return quantity
    }

    const totalPrice=()=>{
        const price = cart.reduce((total,productCart)=> total+(productCart.precio*productCart.quantity), 0)
        return price
    }

    return (
        <CartContext.Provider value = {{cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}