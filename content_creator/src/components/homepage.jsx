import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import React, { useState ,useEffect} from 'react';
import { GoogleLogin } from '@react-oauth/google';
import PaymentForm from './paymentform';
import Decore from "../assets/images/Decore.png"

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState(null);
  useEffect(() => {
    console.log('isLoggedIn has changed:', isLoggedIn);
    if(isLoggedIn===true){
      navigateTo('/content-select', { state: { credentials, isLoggedIn }});
    }
  }, [isLoggedIn]);
  
  useEffect(() => {
    console.log('credentials have changed:', credentials);
    if(credentials!== null){
      console.log("id ",credentials.credential)
    }
  }, [credentials]);
  const handleLoginSuccess = (credentialResponse) => {
    console.log(isLoggedIn);
    setIsLoggedIn(true);
    console.log(isLoggedIn);
    // navigateTo('/content-select')
    setCredentials(credentialResponse);
    console.log(credentials)
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  const handleLogout = () => {
    console.log(isLoggedIn);

    setIsLoggedIn(false);
    console.log(isLoggedIn);

    setCredentials(null);
  };

  const navigateTo = useNavigate();

  function handleClick() {
    navigateTo('/content-select')
  }
  return (
    <div className="h-screen flex flex-row">
      <img src={Decore} class="absolute right-0 top-0 w-30 h-auto z--100" alt="" />

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
                style={{
                  background: '#3b5998',
                  color: 'white',
                  fontSize: '16px',
                  borderRadius: '10px',
                  border: 'none',
                  padding: '10px 20px',
                }}
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