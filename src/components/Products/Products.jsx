import React from 'react';
import { Grid } from '@material-ui/core';
//import { ShortTextSharp } from '@material-ui/icons';
import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'sports shoe', price: '£14' },
    { id: 2, name: 'Windows PC', description: 'Lenovo windows 10 pc', price: '£8' }
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