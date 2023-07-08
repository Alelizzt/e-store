
import { PropTypes } from 'prop-types';
import { Link, Outlet } from 'react-router-dom'


const Layout = ({ categories }) => {
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
                    <Outlet />
                </main>
            </section>
            <footer>
                <Link to='/'>Home</Link> | <Link to='/basket'>Basket</Link>
            </footer>
        </>
    )
}

Layout.propTypes = {
    categories: PropTypes.object
}
export default Layout