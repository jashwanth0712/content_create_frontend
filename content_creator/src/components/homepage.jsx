import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import PaymentForm from './paymentform';
export default function HomePage() {

    const navigateTo = useNavigate();

  function handleClick() {
    navigateTo('/content-select')
  }
    return (
        <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-8">Welcome to The Landing Page</h1>
          <button    onClick={handleClick}  className="px-8 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Get started
          </button>
          <PaymentForm/>
          <div className="flex flex-col items-center">
      <img
        src="https://via.placeholder.com/64"
        alt="slider thumb"
        className="h-8 w-8 absolute top-1/2 transform -translate-y-1/2 -left-4"
      />
      
    </div>
        </div>
      );
}