import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import Productos from './components/Productos'
import './index.css'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {
  return(
    <BrowserRouter>
        <header>
          <Header />
        </header> 
        <main>
          <Routes>
            <Route path={'/'} element={<ItemListContainer />} />
            <Route path={'/category/:id'} element={<ItemListContainer />} />
            <Route path={'/item/:id'} element={<ItemDetailContainer />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
    </BrowserRouter>
  )
}


export default App
