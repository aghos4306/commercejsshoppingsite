import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

import useStyles from './styles';
import shoe from '../../assets/shoe.jpg';

const products = [
    { id: 1, name: 'Shoes', description: 'sports shoe', price: '£14', image: {shoe} },
    { id: 2, name: 'Windows PC', description: 'Lenovo windows 10 pc', price: '£8', image: 'https://unsplash.com/photos/1HzaqbBpxBs' },
    { id: 3, name: 'Chinox Pant', description: 'Mens slim fit pant', price: '£8', image: 'https://unsplash.com/photos/1HzaqbBpxBs' }
]

const Products = () => {
    const classes = useStyles()
    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
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