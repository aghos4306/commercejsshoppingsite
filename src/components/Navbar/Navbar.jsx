import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/shoppingsite.jpg';

const Navbar = () => {
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="ShoppingSite" className={classes.image} height="25px" />
                        ShoppingSite
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
