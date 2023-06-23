import { useEffect, useState } from 'react'
import './App.css'
import Category from './components/Category';


function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCategories(data);
      })
  }, [])

  const handleCategoryClick = id => {
    fetch("http://localhost:3000/products?catId=" + id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
  }

  const renderCategories = () => {
    return categories.map(cat =>
      <Category key={cat.id} id={cat.id} title={cat.title} onCategoryClick={() => handleCategoryClick(cat.id)} />)
  }

  const renderProducts = () => {
    return products.map(p =>
      <div key={p.id}>{p.title}</div>
    )
  }

  return (
    <>
      <header>E-Store</header>

      <section>
        <nav>
          {
            categories && renderCategories()
          }
        </nav>
        <article>
          <h1>Products</h1>
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
