import Banner from './components/Banner'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import './index.css'

const App = () => {
  return(
    <div>
      <ItemListContainer mensaje={"Bienvenido Usuario"} /> 
      <Header />
      <Banner />
      <ItemListContainer mensaje={"SITIO EN PROCESO"} /> 
    </div>
  )
}


export default App
