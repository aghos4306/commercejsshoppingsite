## Install dependencies @material-ui/core @material-ui/icons @chec/commerce.js @stripe/react-stripe-js @stripe/stripe-js react-router-dom react-hook-form

## Delete src folder and re-create it from scratch starting with index.js and App.css...

## Products Component: creata a funtion based component for products, create arbitratry products as an array of object. Within the Products function, run map function on the products created. For each product we return properties specific for that product. This Product is the singular product component.

## Single Product component. This component is going to have all specific layout for each product e.g image, description, title etc. import from material ui Card, CardMedia, CardContent, CardAction, Typography, IconBotton. import { AddShoppingCart } from '@material-ui/icons'. The Product is a material ui card component. The title which is product.name comes from Products since Product is a child component to Products. Since Product is rendered in Products, we can pass props into Product component that is rendered in Products.js file. The prop is product, which is the entire product we are looping over. Inside of Product.jsx we have access to product.name, product.id, product.description, product.price once they are destructure in Product.jsx component. An alternative to pass them as props, props, then inside Typography we will instead have props.product.price, props.product.name etc.

# Create styles.js file inside Product folder. This style is used have all the classes used to style single Product. Create the style, and apply them in Product.jsx component. Now go to App.js component and import Products component here, and render Products within the div.

## Navigation bar.Create a Navbar component. Import AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography from material-ui/core. Create Navbar layout.

## Navbar image. create assets folder inside src. paste image inside assets folder. import this image as logo into Navbar.jsx and just use the logo. Build the navbar, import it into App.js file and render it.

# Create styles.js file for Products. Style Products cos navbar overlaps with products.

## Fetch Products from commerce js store. Create in components lib -> commerce.js. import Commerce from @chec/commerce.js. Create a new instance of Commerce. Create an account on commercejs.com to get public and private key. create .env file on the root where you will store public key from commerce. Pass this public key into Commerce by using process.env.NAME, pass in a second argument of true. We just created a commerce store. This commerce object can be used all over the application. Usually creating a full fledge ecommerce store, you need a backend api for creating products, fetching products, deleting, updating, authentication and a lot more. All of these is stored in this commerce instance we just created.

## Import commerce into App.js. Still in App.js use the useState hook to fetch products, by default the products is an empty array. use the useEffect hook to populate the products immediately the application loads. The function we create now fetchProducts will asynchronously get all products. Destructure the data from the products. The data is going to be the products. Once the products is set into setProducts, we now call the created fetchProducts function inside the useEffect hook. The empty array means that the fetchProducts function is only going to run at the start of the render. In class based component, this is called componentDidMount. Recap, the fetchProducts function called inside the useEffect hook will call our commerce products list and set the products to the state. console.log(products) gives first an empty array and then undefined. If you go to commerce.js dashboard and go to Products, you will see that Products array is completely empty. You can add products straight from the dashboard. Lets add couple products. sku field should be left empty for commerce js to automatically generate products id. Specify the products e.g keyboard in commerce dashboard. Upon refreshing, you notice the console now have one product. Add more products through commerce js dashboard. As you can see now on the console, the array is now filled with 8 objects.

## Instead of having mockup products, to display these products from commerce, we have to pass them as props to our Products component rendered inside App.js file. Now go to Products.jsx components, destructure products here also. We can comment out now the test products array. We now have the access to the real products. For each product, we send specific product object inside Product component. Most of the work now is going to be done inside the Product.jsx component.

# Product component. Check what property product object have.To test console.log(product) and return <div>Product Sample</div> just so that we dont return the actual return which might give error at this state of development. We can see each product object on the console. Now which properties do we need from each one of these object? product.image will be product.media.source, product.name stays same, product.price will be product.price.formatted_with_symbol. Products are now fetched from commerce into site. An issue is that the description is displays with html tags. To remove this tag, render the description to remove the html tag using dangerouslySetInnerHTML={{__html: product.description}} within Typography. And make the Typography a self closing tag, also remove rendered {product.description} otherwise you will get this error 'Unhandled Rejection (Error): Can only set one of `children` or `props.dangerouslySetInnerHTML`.'

## Add Products to Cart. Still in App.js. Cart will be managed by commercejs. Our cart is going to be another state in react. The cart is going to initially set to an empty object using the useState hook. Just like we created fetchProducts function to handle products, we also create an async fetchCart function to handle carting. You see the pattern. Console.log(cart), you see at the start cart does not exist, later on cart is populated. Notice the cart object has a property of currency, created, subtotal, discount_code, line_items etc. We are interested in line_items, which is the items we will add to the cart, and subtotal which is the total price of the items that are currently in the cart.

# Create function that actually pushes the product to cart. Still in App.js, The function handleAddToCart performs this task. This function accepts two parameters, productId and quantity.Use these param to pass to commerce api and then add to cart. Now update the cart to this item. Now where do we use this handleAddToCart function. We cannot use it here in App.js cos we dont have the addtocart button here. We will use it in the Product.jsx component. In the rendered Products inside App.js, we pass handleAddtoCart as props as onAddToCart. Go to Products.jsx and also pass in onAddToCart as props. This is the function that will add item to cart. Still in Products.jsx file pass onAddToCart one level deeper into rendered Product component here. Now in Product.jsx pass destructure onAddToCart, and on the IconButton,dont call like this onClick={onAddToCart}, cos it will call itself immediately. Instead call like this onClick={() => onAddToCart(product.id, 1)}> The product.id is identifies each individual product, and the 1 is the quantity as we add items one by one. Now we should be able to update the cart depending on what is clicked. Even though the cart icon count is still static, Upon clicking an item, on the console, we get a new cart that has line_items which was initially an empty array, but now it has one item in it. Click another item, you get that also added to the cart in console. It calculates the subtotal progressively. Now we have to use the data from the cart to display a dynamic icon on the cart in the UI.

# Display Data from cart console on UI. We now go to Navbar.jsx because the cart icon is in the navbar. We have to get the information about the cart and use it here. Firstly pass totalItems as props to the rendered Navbar in App.js file. totalItems is the total number of items in the cart. Now go to Navbar and destructure totalItems, and pass totalItems as props to Badge i.e badgeContent={totalItems}. Items are now dynamically displayed in the cart. As you notice, commerce api stores the item, the cart item persist upon refresh.

## Create cart layout. Once cart is clicked, we want to display all the items we have in the cart. Add more items, remove items, head to checkout. In components -> Cart-> cart.jsx. Create a function component and import required material-ui core comp. Create layout of Cart. Recall the className toobar pushes the container a little more down so it does not overlap with in the navbar. We define a variable isEmpty, we dynamically render the cart depending if its empty or not. If isEmpty display the component EmptyCart. EmptyCart is a sub component. else display FilledCart which is also a sub component. These components are created inside the Cart components cos they are really simple elements. If there are items, return a grid and loop through cart items. Right now we do not have any cart items, we do not even have the cart destructured yet, pass cart through props from App.js to Cart.jsx. In App.js we have cart in the state, import and render Cart, comment out the rendered Products. Now pass cart as props in the rendered Cart component. We comment out Products component right now but later on we will implement react router so we can navigate between the Product and the Cart. In Cart.jsx component we can now pass destructure cart. How do we know the cart is empty? Answer: cart.line_items.length === 0, this is possible cos line_items is an array. If cart is not empty, loop through line_items using map method. Instantaneously return a Grid which renders CartItem component, this component will be created shortly. For simplicity just return name of item for now. Getting cannot read property line of undefined, meaning line_items wasn't fetched yet. Instead of defining the line_items in isEmpty and passing isEmpty, use line_items straigt forward.

# CartItem Component. Create Cart -> CartItem -> CartItem.jsx component. I created the CartItem inside the Cart cos the CartItem is only going to be used inside the Cart. Create a functional component and import needed material ui core component. Now that we created CartItem component, import and render CartItem in Cart.jsx, pass item as props into the rendered CartItem inside Cart.jsx. We can now go to CartItem.jsx component and destructure item, cos we know that we are receiving now item through props.

## Implement React Routes. In App.js import BrowserRouter, Switch, Route.

## Add Redirect upon clicking cart button. Go to Navbar component cos that is where this button is located. Import Link from react-router-dom
