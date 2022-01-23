import React, { useState, useEffect } from "react";
import { getAllProducts } from "../api/products";
import Product from "../components/Product";
import SideBarCategorieen from "../components/SideBarCategorieen";

const Shop = ({setCart}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(data => setProducts(data));
    }, []);


    return (
        <section class="bg-white py-8">
            <div className="lg:w-11/12 sm:w-full mx-auto flex flex-wrap pt-4 pb-12">
                <SideBarCategorieen products={products} setProducts={setProducts} />
                <div class="flex flex-wrap w-3/4">
                {products.length > 0 && products.map(product => <Product product={product} setCart={setCart}/>)}
                </div>
            </div>
        </section>
    )
}

export default Shop;