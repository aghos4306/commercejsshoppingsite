import React from 'react';
import { Grid } from '@material-ui/core';
//import { ShortTextSharp } from '@material-ui/icons';
import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'sports shoe', price: '£14', image: 'https://www.google.com/search?q=sports+shoes&sxsrf=ALeKk00L_kE9sA8Jbq_-qG-wXv2ORUeOBQ:1607530229282&source=lnms&tbm=isch&sa=X&ved=2ahUKEwilqqDipMHtAhXWTBUIHUrHBXMQ_AUoAXoECAQQAw&biw=1422&bih=615#imgrc=ZTsWb--wG7-GWM' },
    { id: 2, name: 'Windows PC', description: 'Lenovo windows 10 pc', price: '£8', image: 'https://unsplash.com/photos/1HzaqbBpxBs' },
    { id: 3, name: 'Chinox Pant', description: 'Mens slim fit pant', price: '£8', image: 'https://unsplash.com/photos/1HzaqbBpxBs' }
]

const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )  
}

export default Products;