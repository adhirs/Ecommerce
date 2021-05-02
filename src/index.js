import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
import dotenv from "dotenv";

// const domain = "dev-onp3ul8r.us.auth0.com"
// const clientId ="DPHkV9qjsDZoeO1DA7DYQ3gfQ0MNB62q"



ReactDOM.render(
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation = "localstorage"> 
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>    
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>
     
    ,document.getElementById('root'))
