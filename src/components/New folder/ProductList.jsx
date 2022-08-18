import React, {useState, useEffect} from "react";
import axios from "axios";
import Product from "./Product";



// flowbite.com

function ProductList() {
    const [products, setProducts] = useState([]);
useEffect(() => {
    const getProducts = async () => {
        const results = await axios.get(
            "https://api.escuelajs.co/api/v1/products"
        );
       setProducts(results.data);

    };

    getProducts();
}, []);
    return(
        <div className="flex flex-wrap gap-10 justify-center pt-10">
            {
                   products.map((product) => (
                    <Product key={product.id} product={product} />
                   ))
            }</div>

    );
}
export default ProductList; 