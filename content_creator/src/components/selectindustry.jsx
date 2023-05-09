import React from 'react';
import { Link,useLocation } from "react-router-dom";
import Popup from './pop';
const domains = [
  {
    name: "Technology",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Technology",
    description: "Innovative solutions for modern-day problems and advancement of society."
  },
  {
    name: "Finance",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Finance",
    description: "Managing and allocating funds effectively for financial stability"
  },
  {
    name: "Health",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Health",
    description: "Maintaining physical and mental well-being for a happy and fulfilling life."
  },
  {
    name: "Education",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Education",
    description: "Providing knowledge and skills for personal and professional growth."
  },
  {
    name: "Sports",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Sports",
    description: "Physical activity for entertainment, competition, and fitness."
  },
  {
    name: "Food",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Food",
    description: "Nourishing and tasty cuisine for sustenance and pleasure."
  },
  {
    name: "Fashion",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Fashion",
    description: "Trendy and stylish clothing and accessories for self-expression."
  },
  {
    name: "Entertainment",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Entertainment",
    description: "Various forms of amusement and enjoyment for leisure time."
  },
  {
    name: "Travel",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Travel",
    description: "Exploration of new places and cultures for adventure and relaxation."
  },
  {
    name: "Environment",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Environment",
    description: "Protection and preservation of the natural world and its resources."
  },
  {
    name: "Art",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Art",
    description: "Creative expression through various mediums for beauty and emotion."
  },
  {
    name: "Politics",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Politics",
    description: "Administration of power and decision-making for society and government."
  },
  {
    name: "Science",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Science",
    description: "Study and exploration of the natural world and its phenomena."
  },
  {
    name: "Music",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Music",
    description: "Melodic and rhythmic sound for emotional expression and enjoyment."
  },
  {
    name: "Social Media",
    image: "https://dummyimage.com/900x900/E2E8F0/000&text=Social+Media",
    description: "Digital communication and networking for personal and business purposes."
  },
]

function DomainCard({ name, image,description }) {
  const location = useLocation();
  const credentials = location.state.credentials;
  const isLoggedIn = location.state.isLoggedIn;
  const user = location.state.user;
  return (
    <Link
    to={`/form/${name}`}
    state={{credentials,isLoggedIn,user,name}}
    className="bg-white shadow-lg rounded-lg  mx-2 my-4 sm:mx-4 sm:my-8 w-25 sm:w-48 flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2"
  >
    <button className="w-full h-16 sm:h-24 px-2 flex rounded-full items-center justify-center text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out transform hover:-translate-y-2 focus:outline-none text-lg font-bold bg-white shadow-lg rounded-lg border-2 border-yellow-500">
  {name}
</button>

  </Link>
  
  
  );
}





function SelectIndustry() {
  const location = useLocation();
  const credentials = location.state.credentials;
  const user = location.state.user;
  console.log(user.email," is in select industry page now");
  return (
    <div>
      
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black ">Select domain of the business</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 ">
 select the most suitable domain among the given options , if you feel that your domain is very unique from the given option use custom domain</p>
<Popup/>
<div className="flex flex-wrap justify-center">
      
      {domains.map((domain) => (
        <DomainCard key={domain.name} {...domain} />
      ))}
    </div>
    </div>
  
  )
}
export default SelectIndustry