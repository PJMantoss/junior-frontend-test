import AllProducts from './pages/AllProducts';
import TechProducts from './pages/TechProducts';
import Clothes from './pages/Clothes';
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AllProducts />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/tech" element={<TechProducts />} />
        <Route path="/products/clothes" element={<Clothes />} />
      </Routes>
    </div>
  );
}

export default App;
