import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Elements} from "@stripe/react-stripe-js";

import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51MixURSA5ZXbnHVL39TORNkzmJYL5ugiSJFE7IRosZj6k7ARRMrxkdQ9EjVsJt9ygic3IBTgrbTduhuEvHwKaxp700KtYbOhJD');

function MyCheckoutForm() {
  const { elements } = useStripe();

  // Your code here
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Elements stripe={stripePromise}>
    <React.StrictMode>
  <GoogleOAuthProvider clientId="739336288906-99bcu04tcjume2jo7haip2egahs8hlp7.apps.googleusercontent.com"><App/></GoogleOAuthProvider>;
  </React.StrictMode>
  </Elements>
)
