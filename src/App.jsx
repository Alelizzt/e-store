import { useEffect, useState } from 'react'
import './App.css'
import Category from './components/Category';

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
    return categories.data.map(cat =>
      <Category key={cat.id} id={cat.id} title={cat.title} onCategoryClick={() => handleCategoryClick(cat.id)} />)
  }

  const renderProducts = () => {
    return products.data.map(p =>
      <div key={p.id}>{p.title}</div>
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
        <article>
          <h1>Products</h1>
          {products.errorMessage && <div> Error: {products.errorMessage}</div>}
          {
            products && renderProducts()
          }

        </article>
      </section>
      <footer>
        Footer
      </footer>
    </>
  )
}

export default App
