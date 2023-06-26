import { useEffect, useState } from 'react'
import './App.css'
import Category from './components/Category';
import CategoryProduct from './components/CategoryProduct';

import { getCategories, getProducts } from './fetcher';

function App() {
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });
  const [products, setProducts] = useState({ errorMessage: '', data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  }, [])

  const handleCategoryClick = id => {
    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    }
    fetchData();
  }

  const renderCategories = () => {
    return categories.data.map(category =>
      <Category
        key={category.id}
        id={category.id}
        title={category.title}
        onCategoryClick={() => handleCategoryClick(category.id)} />)
  }

  const renderProducts = () => {
    return products.data.map(p =>
      <CategoryProduct {...p} key={p.id}>{p.title}</CategoryProduct>
    )
  }

  return (
    <>
      <header>E-Store</header>

      <section>
        <nav>
          {categories.errorMessage && <div> Error: {categories.errorMessage}</div>}
          {
            categories.data && renderCategories()
          }
        </nav>
        <main>
          <h1>Products</h1>
          {products.errorMessage && <div> Error: {products.errorMessage}</div>}
          {
            products && renderProducts()
          }

        </main>
      </section>
      <footer>
        Footer
      </footer>
    </>
  )
}

export default App
