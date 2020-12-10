import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

const Cart = ({ cart }) => {
    //const isEmpty = cart.line_items.length === 0;
    const isEmpty = !cart.line_items.length;

    const EmptyCart = () => (
        <Typography variant="subtitle1">No Item in Shopping Cart, Start shopping...</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        {/* <CartItem /> */}
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Clear Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Check Out</Button>
                </div>
            </div>
        </>
    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">
                Your Shopping List
            </Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />  }
        </Container>
    )
}

export default Cart
