import './App.css';
import { Main } from './components'
import { Routes, Route } from 'react-router-dom';
import FilteredProducts from './components/filteredProducts/FilteredProducts';
import SingleProduct from './components/filteredProducts/SingleProduct';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
          <Route path='/filteredProducts/:type' element={<FilteredProducts/>} />
          <Route path='/filteredProducts/:type/:id' element={<SingleProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
