import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import PaymentForm from './paymentform';
import Decore from "../assets/images/Decore.png"

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    navigateTo('/content-select')
    console.log(credentialResponse);
    setIsLoggedIn(true);
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const navigateTo = useNavigate();

  function handleClick() {
    navigateTo('/content-select')
  }
  return (
    <div className="h-screen flex flex-row">
    <img src={Decore} class="absolute right-0 top-0 w-30 h-auto z--100" alt=""/>

      <div className="flex-1 flex flex-col justify-center items-center">
        {/* <div className=" justify-end w-20">
          <Player
            src='https://assets1.lottiefiles.com/private_files/lf30_qwwsom67.json'
            className="player"
            loop
            autoplay
          />
        </div> */}
        <h1 className="text-6xl font-bold mb-8 w-full z-50">
          Welcome to <span class="text-yellow-500 z-50">Createe</span>
        </h1>
        <h2 class="text-xl font-semibold mb-4 z-50">Now creating social media content is easy</h2>
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/64"
            alt="slider thumb"
            className="h-8 w-8 absolute top-1/2 transform -translate-y-1/2 -left-4"
          />
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Logout
            </button>
          ) :
            (
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
                buttonText="Login"
                style={{ border: 'none' }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              />

            )}
        </div>
      </div>
      <div className="hidden md:flex md:flex-1 md:justify-end md:w-50 md:h-50">
        <Player
          src='https://assets1.lottiefiles.com/packages/lf20_ik4jyixs.json'
          className="player"
          loop
          autoplay
        />
      </div>
      
    </div>
  );
}