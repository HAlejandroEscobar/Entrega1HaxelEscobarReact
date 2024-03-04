import './App.css'
import './components/NavBar'
import './components/CartWidget'
import './components/ItemListContainer'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  

  return (
    <>
    
     <NavBar/> 
     <ItemListContainer greeting="Buenas profe... Todavía no sé que marca realizar pero aquí se van a ubicar los productos en las proximas entregas:"/>
     
    </>
  );
}

export default App
