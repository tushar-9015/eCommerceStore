
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer'
import Products from './pages/Products/Products'
import Cart from './pages/Cart/Cart'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Product from './pages/Product/Product'


function App() {
  return (
    <div className='app'>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path='cart' element={<Cart />} />
      <Route path='/product/:id' element={<Product />} />
    </Routes>
      <Footer /> 
    </div>
  )
}

export default App
