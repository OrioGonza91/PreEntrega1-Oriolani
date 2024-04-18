import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Nosotros from './components/Nosotros/Nosotros';
import './main.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:categoria' element={<ItemListContainer />} />
          <Route path='/nosotros' element={<Nosotros />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
