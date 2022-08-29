import React, {useState, useEffect, useLayoutEffect} from "react";
import axios from "axios";
import Product from "./Product";
import Spinner from "./Spinner";
import useAxios from "./useAxios";
import {useProductContext} from "../context/ProductContext"



// flowbite.com

function ProductList() {
    // const [products, setProducts] = useState([]);
    const {data, isLoading, error} = useAxios("https://fakestoreapi.com/products");
    const { products, setProducts} = useProductContext();
    useEffect(() =>{
        setProducts(data);
    }, [data]);

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
    console.log(products);
    return(
        <div className="flex flex-wrap gap-10 justify-center pt-10">
            {
                   data.map((data) => (
                    <Product product={data} />
                   ))
            }</div>

    );
}
export default ProductList; 