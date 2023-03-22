import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="739336288906-99bcu04tcjume2jo7haip2egahs8hlp7.apps.googleusercontent.com"><App/></GoogleOAuthProvider>;
  </React.StrictMode>,
)
