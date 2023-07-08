import { useEffect, useState } from 'react'
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import ProductDetail from './components/ProductDetail';
import Basket from './components/Basket.jsx';
import Checkout from './components/Checkout.jsx';
import Category from './components/Category.jsx';
import Layout from './components/Layout.jsx';
import { getCategories } from './fetcher';
import Home from './components/Home';

function App() {
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });


  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout categories={categories} key={categories.id} />}>
            <Route index='home' element={<Home />} />
            <Route path='basket' element={<Basket />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='products/:productId' element={<ProductDetail />} />
            <Route path='categories/:categoryId' element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
