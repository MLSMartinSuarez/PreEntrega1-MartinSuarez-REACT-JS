import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import './index.css'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error404 from './components/Error404'
import Cart from './components/Cart'
import CartContextProvider from './components/Context/CartContext'
import Checkout from './components/Checkout'

const App = () => {
  return(
    <CartContextProvider>
      <BrowserRouter>
          <header>
              <Header />
          </header> 
          <main>
            <Routes>
              <Route path={'/'} element={<ItemListContainer />} />
              <Route path={'/category/:id'} element={<ItemListContainer />} />
              <Route path={'/item/:id'} element={<ItemDetailContainer />} />
              <Route path={"/checkout"} element={<Checkout/>} />
              <Route path={'/cart'} element={<Cart />} />
              <Route path={'*'} element={<Error404 />} />
            </Routes>
          </main>
          <footer>
              <Footer />
          </footer>
        
      </BrowserRouter>
    </CartContextProvider>
  )
}


export default App
