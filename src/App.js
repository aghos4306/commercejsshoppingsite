import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
*/

import { commerce } from './components/lib/commerce';
import { Products, Navbar, Cart } from './components';


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
        //const response = await commerce.cart.add(productId, quantity);
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }

    //update product qty
    const handleUpdateCartQty = async (productId, quantity) => {
        //const response = await commerce.cart.update(productId, { quantity });
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }

    //handle remove from cart
    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    }

    //empty entire cart
    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    //console.log(products);
    console.log(cart);

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart}/> 
                    </Route>
                    <Route exact path="/cart">
                        <Cart 
                            cart={cart} 
                            handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                </Switch>
            </div>
        </Router> 
    )
}

export default App
