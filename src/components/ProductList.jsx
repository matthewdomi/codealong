import React, {useState, useEffect} from "react";
import axios from "axios";
import Product from "./Product";
import Spinner from "./Spinner";
import useAxios from "./useAxios";



// flowbite.com

function ProductList() {
    // const [products, setProducts] = useState([]);
    const {data, isLoading, error} = useAxios("https://api.escuelajs.co/api/v1/products");

    if (isLoading) return <Spinner />;
    if (error) return <p>{error}</p>;

// useEffect(() => {
//     const getProducts = async () => {
//         const results = await axios.get(
//             "https://api.escuelajs.co/api/v1/products"
//         );
//        setProducts(results.data);

//     };

//     getProducts();
// }, []);
    console.log(data);
    return(
        <div className="flex flex-wrap gap-10 justify-center pt-10">
            {
                   data.map((product) => (
                    <Product product={product} />
                   ))
            }</div>

    );
}
export default ProductList; 