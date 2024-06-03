import Banner from './components/Banner/Banner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout/Layout';
import './main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext/CartContext';

function App() {



  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={<Banner />} />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/productos' element={<ItemListContainer />} />
              <Route path='/productos/:categoria' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />

            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
