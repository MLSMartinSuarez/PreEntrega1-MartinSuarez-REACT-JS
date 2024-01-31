import Banner from './components/Banner'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import Productos from './components/Productos'
import './index.css'

const App = () => {
  return(
    <>
    <header>
      <ItemListContainer/> 
      <Header />
    </header> 
    <main>
      <Banner />
      <Productos />
    </main>
      <ItemListContainer/> 
    </>
  )
}


export default App
