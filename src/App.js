import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
*/
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import { commerce } from './components/lib/commerce';
import { Products, Navbar, Cart} from './components';
import { AirlineSeatLegroomReducedRounded } from '@material-ui/icons';


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

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
        //setCart(response.cart);
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }

    //update product qty
    const handleUpdateCartQty = async (productId, quantity) => {
        //const response = await commerce.cart.update(productId, { quantity });
        //setCart(response.cart);
        const { cart } = await commerce.cart.add(productId, { quantity });
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

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
       try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
        setOrder(incomingOrder);
        refreshCart();
       } catch (error) {
           setErrorMessage(error.data.error.message);
       }
    }

    //clear cart field after order completion
    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
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
                    <Route exact path="/checkout">
                        <Checkout cart={cart} />
                    </Route>
                </Switch>
            </div>
        </Router> 
    )
}

export default App
