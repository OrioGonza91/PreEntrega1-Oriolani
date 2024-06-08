import Banner from './components/Banner/Banner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout/Layout';
import './main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext/CartContext';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfAwIhJ13UOCbvU3IdhnsrppXFE1LRHrg",
  authDomain: "adidas-center.firebaseapp.com",
  projectId: "adidas-center",
  storageBucket: "adidas-center.appspot.com",
  messagingSenderId: "22687662704",
  appId: "1:22687662704:web:35e180f96b6fbd980f6ab5"
};

initializeApp(firebaseConfig);

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
