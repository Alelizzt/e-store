import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getProductsByQuery } from '../fetcher';
import CategoryProduct from './CategoryProduct';

const SearchResults = () => {
    const [products, setProducts] = useState({
        errorMessage: "",
        data: [],
    });
    const [searchParams] = useSearchParams();
    const query = searchParams.get('s');

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductsByQuery(query);
            setProducts(responseObject);
        };
        fetchData();
    }, [query]);

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

export default SearchResults