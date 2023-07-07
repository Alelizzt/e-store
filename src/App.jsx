import { useEffect, useState } from 'react'
import './App.css'

import { Link } from 'react-router-dom';

import { getCategories } from './fetcher';

function App() {
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });


  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  }, [])

  /*
  const handleCategoryClick = id => {
    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    }
    fetchData();
  }*/

  const renderCategories = () => {
    return categories.data.map(category =>
      <li key={category.id}>
        <Link to={`/categories/${category.id}`}> {category.title} </Link>
      </li >
    )
  }

  return (
    <>
      <header>E-Store</header>

      <section>
        <nav>
          {categories.errorMessage && <div> Error: {categories.errorMessage}</div>}

          <ul>
            {categories.data && renderCategories()}
          </ul>
        </nav>
        <main>

        </main>
      </section>
      <footer>
        Footer
      </footer>
    </>
  )
}

export default App
