## Install dependencies @material-ui/core @material-ui/icons @chec/commerce.js @stripe/react-stripe-js @stripe/stripe-js react-router-dom react-hook-form

## Delete src folder and re-create it from scratch starting with index.js and App.css...

## Products Component: creata a funtion based component for products, create arbitratry products as an array of object. Within the Products function, run map function on the products created. For each product we return properties specific for that product. This Product is the singular product component.

## Single Product component. This component is going to have all specific layout for each product e.g image, description, title etc. import from material ui Card, CardMedia, CardContent, CardAction, Typography, IconBotton. import { AddShoppingCart } from '@material-ui/icons'. The Product is a material ui card component. The title which is product.name comes from Products since Product is a child component to Products. Since Product is rendered in Products, we can pass props into Product component that is rendered in Products.js file. The prop is product, which is the entire product we are looping over. Inside of Product.jsx we have access to product.name, product.id, product.description, product.price once they are destructure in Product.jsx component. An alternative to pass them as props, props, then inside Typography we will instead have props.product.price, props.product.name etc.

# Create styles.js file inside Product folder. This style is used have all the classes used to style single Product. Create the style, and apply them in Product.jsx component. Now go to App.js component and import Products component here, and render Products within the div.
