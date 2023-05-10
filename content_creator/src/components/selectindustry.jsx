import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Popup from './pop';
import { useState, useEffect } from 'react';

function DomainCard({ name }) {
  const location = useLocation();
  const credentials = location.state.credentials;
  const isLoggedIn = location.state.isLoggedIn;
  const user = location.state.user;

  const handleDomainClick = () => {
    localStorage.setItem('selectedDomain', name);
  };

  return (
    <Link
      to={`/form/${name}`}
      state={{ credentials, isLoggedIn, user, name }}
      className="bg-white shadow-lg rounded-lg  mx-2 my-4 sm:mx-4 sm:my-8 w-25 sm:w-48 flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2"
    >
      <button
        className="w-full h-16 sm:h-24 px-2 flex rounded-full items-center justify-center text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out transform hover:-translate-y-2 focus:outline-none text-lg font-bold bg-white shadow-lg rounded-lg border-2 border-yellow-500"
        onClick={handleDomainClick}
      >
        {name}
      </button>
    </Link>
  );
}

function SelectIndustry() {
  const location = useLocation();
  const user = location.state.user;

  const [domains, setDomains] = useState([]);

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const response = await fetch('http://localhost:3000/admin');
        const data = await response.json();
        const industries = data.Industries;
        setDomains(industries);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDomains();
  }, []);

  console.log(user, 'is on the select industry page now');

  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
        Select domain of the business
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Select the most suitable domain among the given options. If you feel that your domain is very unique from the
        given options, use a custom domain.
      </p>
      <Popup />
      <div className="flex flex-wrap justify-center">
        {domains.map((domain) => (
          <DomainCard key={domain} name={domain} />
        ))}
      </div>
    </div>
  );
}

export default SelectIndustry;
