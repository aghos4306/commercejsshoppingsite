import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import { Link } from 'react-router-dom';

const stripePromise = loadStripe('...')

const PaymentForm = ({ checkoutToken, backStep }) => {
    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant="h6" gutterBottom style={{margin: '20px 0'}}>
                Payment Method
            </Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form>
                            <CardElement />
                            <br /> <br />
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Button component={Link} variant="outlined" onClick={backStep}>Back</Button>
                                <Button type="submit" variant="contained" color="primary" disabled={!stripe}>
                                    Pay { checkoutToken.live.subtotal.formatted_with_symbol }
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default PaymentForm
