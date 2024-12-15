
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Navbar from "./componentes/Navbar/Navbar"

function App() {


  return (
    <div>
      <Navbar/>
      <ItemListContainer greetings={"Bienvenido al mágico mundo de Karamello. Pastelería y panadería artesanal. Animate a deleitar tu paladar probando todas nuestras delicias"}/>
    </div>
  )
}

export default App
