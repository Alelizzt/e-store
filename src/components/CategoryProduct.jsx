import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';


const CategoryProduct = ({ id, title, image, specs, features, price, stock }) => {

    const navigate = useNavigate();

    return (
        <article>
            <div className='category-product-title'>
                <Link to={`products/${id}`}> {title} </Link>
            </div>

            <figure>
                <div className='category-product-image-container'>
                    <img src={`./assets/${image}`} alt={title} />
                </div>
            </figure>

            <aside>
                <div className='category-product-info-dimensions'>
                    <h3> Dimensions </h3>
                    <label>{specs.dimensions}</label>
                </div>

                {specs.capacity &&
                    <div className='category-product-info-capacity'>
                        <h3> Capacity </h3>
                        <label>{specs.capacity}</label>
                    </div>
                }

                <div className='category-product-info-features'>
                    <h3> Features </h3>
                    <ul>
                        {features?.map((feature, i) => {
                            return <li key={i}>{feature}</li>
                        })}
                    </ul>
                </div>
            </aside>

            <aside className='category-product-info-finance'>
                <div className='category-product-info-finance-price'>
                    &pound;{price}
                </div>

                <div className='category-product-finance-info-stock'>
                    <label> Stock level : {stock} </label>
                    <label>FREE Delivery</label>
                </div>

                <div className='category-product-action'>
                    <button onClick={() => navigate(`products/${id}`)}>View Product</button>
                    <button>Add to Basket</button>
                </div>
            </aside>
        </article>
    )
}

CategoryProduct.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    specs: PropTypes.object,
    features: PropTypes.array,
    price: PropTypes.number,
    stock: PropTypes.number
}

export default CategoryProduct