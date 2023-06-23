import { useEffect, useState } from 'react'
import './App.css'
import Category from './components/Category';


function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResults(data);
      })
  }, [])

  const renderCategories = () => {
    const categories = [];
    for (let i = 0; i < results.length; i++) {
      categories.push(<Category key={results[i].id} id={results[i].id} title={results[i].title} />);
    }
    return categories;
  }

  return (
    <>
      <header>E-Store</header>

      <section>
        <nav>
          {
            results && renderCategories()
          }
        </nav>
        <article>
          Main Area
        </article>
      </section>
      <footer>
        Footer
      </footer>
    </>
  )
}

export default App
