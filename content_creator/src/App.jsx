import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/homepage';
import SelectIndustry from './components/selectindustry';
import Forms from './components/form';
import './App.css'
import Navbar from './components/navbar';
import { GoogleLogin } from '@react-oauth/google';
import PaymentForm from './components/paymentform';
import Content_manager from './components/cms';
import Paragraph from './components/paragraph';
import Subscriptionplans from './components/subscription_plans';
import CommingSoon from './components/commingsoon';
import AdminPage from './components/adminpage';
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (

    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/cms' element={<Content_manager />}></Route>
          <Route path='/under-construction' element={<CommingSoon />}></Route>
          <Route path='/payment' element={<PaymentForm />}></Route>
          <Route path='/form/:domain' element={<Forms />}></Route>
          <Route path='/plans' element={<Subscriptionplans />}></Route>
          <Route path='/result' element={<Paragraph />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/content-select' element={<SelectIndustry />} ></Route>
        </Routes>
      </Router>
      <Analytics/>
    </div>

  );
}


export default App
