import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { getProductsById } from "../fetcher";
import { useEffect, useState } from "react";

const ProductDetail = () => {
    const [product, setProduct] = useState({ errorMessage: '', data: {} });
    const { productId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductsById(productId);
            setProduct(responseObject);
        }
        fetchData();
    }, [productId])

    return (
        <article>
            <div className='category-product-title'>
                {product.data?.title}
            </div>

            <figure>
                <div className='category-product-image-container'>
                    <img src={`../assets/${product.data?.image}`} alt={product.data?.title} />
                </div>
            </figure>

            <aside>
                <div className='category-product-info-dimensions'>
                    <h3> Dimensions </h3>
                    <label>{product.data?.specs?.dimensions}</label>
                </div>

                {product.data?.specs?.capacity &&
                    <div className='category-product-info-capacity'>
                        <h3> Capacity </h3>
                        <label>{product.data.specs.capacity}</label>
                    </div>
                }

                <div className='category-product-info-features'>
                    <h3> Features </h3>
                    <ul>
                        {product.data?.features?.map((feature, i) => {
                            return <li key={i}>{feature}</li>
                        })}
                    </ul>
                </div>
            </aside>

            <div>{product.data?.description}</div>
        </article>
    )
}

ProductDetail.propTypes = {
    product: PropTypes.shape({
        errorMessage: PropTypes.string,
        data: PropTypes.shape({
            title: PropTypes.string,
            image: PropTypes.string,
            specs: PropTypes.shape({
                dimensions: PropTypes.string,
                capacity: PropTypes.string,
            }),
            features: PropTypes.arrayOf(PropTypes.string),
            price: PropTypes.number,
            stock: PropTypes.number,
            description: PropTypes.string,
        }),
    }),
}

export default ProductDetail;
