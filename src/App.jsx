
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Navbar from "./componentes/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './componentes/Cart/Cart'

function App() {


  return (
    <div>
      <BrowserRouter>
          <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greetings={"Bienvenido al mágico mundo de Karamello. Pastelería y panadería artesanal. Animate a deleitar tu paladar probando todas nuestras delicias"}/>} />
            <Route path='/category/:idCategory' element={<ItemListContainer greetings={"Bienvenido al mágico mundo de Karamello. Pastelería y panadería artesanal. Animate a deleitar tu paladar probando todas nuestras delicias"}/>} />
            <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />}/>
          </Routes>
          </CartProvider>
      </BrowserRouter>
      
    </div>
  )
}

export default App
