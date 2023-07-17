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
        if (products.data.length > 0) {
            return products.data.map((product) => (
                <CategoryProduct key={product.id} {...product}>
                    {product.title}
                </CategoryProduct>
            ));
        }
        else {
            return <div> No Results found!</div>
        }
    };

    return (
        <div>
            {products.errorMessage && (<div> Error: {products.errorMessage}</div>)}

            {renderProducts()}
        </div>
    )
}

export default SearchResults