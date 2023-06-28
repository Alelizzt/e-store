import { useParams } from "react-router-dom"

import { getProductsById } from "../fetcher";
import { useEffect, useState } from "react";

const ProductDetail = () => {
    const [product, setProduct] = useState({ errorMessage: '', data: [] });
    const { productId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductsById(productId);
            setProduct(responseObject);
        }
        fetchData();
    }, [productId])

    return (
        <div>ProductDetail id:{productId} title:{product.data.title}</div>
    )
}

export default ProductDetail