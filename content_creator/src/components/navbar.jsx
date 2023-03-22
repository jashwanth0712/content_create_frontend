import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLoginSuccess = (credentialResponse) => {
      console.log(credentialResponse);
      setIsLoggedIn(true);
    };
  
    const handleLoginError = () => {
      console.log('Login Failed');
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
  
    return (
        <header className="flex items-center justify-between px-4 py-3  bg-gray-100 rounded-lg">
        <div className="text-gray-900 font-bold">Createe</div>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Logout
          </button>
        ) : (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
            buttonText="Login with Google"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          />
        )}
      </header>
      
    );
  }
  export default Navbar;