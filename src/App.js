import React, { useState, useEffect } from 'react';
/* import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar'; */

import { commerce } from './components/lib/commerce';
import { Products, Navbar } from './components'

const App = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState({});

    //handle fetch products
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    //handle cart state
    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve()
        setCart(cart);
        //setCart(await commerce.cart.retrieve());
    }

    //Add products to cart
    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    //console.log(products);
    console.log(cart);

    return (
        <div>
            <Navbar totalItems={cart.total_items} />
            <Products products={products} onAddToCart={handleAddToCart}/>
        </div>
    )
}

export default App
