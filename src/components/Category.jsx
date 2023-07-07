import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types';
import { useParams } from "react-router-dom";

import CategoryProduct from './CategoryProduct';
import { getProducts } from '../fetcher';

const Category = () => {
    const [products, setProducts] = useState({
        errorMessage: "",
        data: [],
    });

    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProducts(categoryId);
            setProducts(responseObject);
        };
        fetchData();
    }, [categoryId]);

    const renderProducts = () => {
        return products.data.map((product) => (
            <CategoryProduct key={product.id} {...product}>
                {product.title}
            </CategoryProduct>
        ));
    };

    return (
        <div>
            {products.errorMessage && (<div> Error: {products.errorMessage}</div>)}

            {products && renderProducts()}
        </div>
    )
}

Category.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    onCategoryClick: PropTypes.func
}
export default Category