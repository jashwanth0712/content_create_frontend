import React, { useState, useEffect } from "react";
import axios from "axios";

function LeftBar() {
  const [showList, setShowList] = useState(false);
  const [industries, setIndustries] = useState([]);
  const [targetAudiences, setTargetAudiences] = useState([]);
  const [postTypes, setPostTypes] = useState([]);
  const [selectedOption, setSelectedOption] = useState("industry");

  useEffect(() => {
    // Fetch data from the API endpoint when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data for industries, target audiences, and post types
      const response = await fetch("https://content-create-frontend-8hbx-g5f950nmd-jashwanth0712.vercel.app/admin");
      const output = await response.json();
      console.log(output)
      const { Industries, TargetAudiences, PostTypes } = output;

      setIndustries(output.Industries);
      setTargetAudiences(output.target_audience);
      setPostTypes(output.type_of_post);
    } catch (error) {
      console.log("Failed to fetch data:", error);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowList(true);
  };

  const addItem = async (e) => {
    e.preventDefault();
    const itemName = e.target.parentNode.firstChild.value;
    if (itemName !== "") {
      try {
        let updatedList = [];
        switch (selectedOption) {
          case "industry":
            updatedList = [...industries, { name: itemName }];
            setIndustries(updatedList);
            break;
          case "targetAudience":
            updatedList = [...targetAudiences, { name: itemName }];
            setTargetAudiences(updatedList);
            break;
          case "postType":
            updatedList = [...postTypes, { name: itemName }];
            setPostTypes(updatedList);
            break;
          default:
            break;
        }

        // // Send PUT request to update the data in the API
        // await axios.put("http://localhost:3000/admin", {
        //   [selectedOption]: updatedList,
        // });

        // Clear the input field
        e.target.parentNode.firstChild.value = "";
      } catch (error) {
        console.log("Failed to update data:", error);
      }
    }
  };

  const deleteItem = async (itemId) => {
    try {
      let updatedList = [];
      switch (selectedOption) {
        case "industry":
          updatedList = industries.filter((industry) => industry.name !== itemId);
          setIndustries(updatedList);
          break;
        case "targetAudience":
          updatedList = targetAudiences.filter((targetAudience) => targetAudience.name !== itemId);
          setTargetAudiences(updatedList);
          break;
        case "postType":
          updatedList = postTypes.filter((postType) => postType.name !== itemId);
          setPostTypes(updatedList);
          break;
        default:
          break;
      }

      // // Send PUT request to update the data in the API
      // await axios.put("http://localhost:3000/admin", {
      //   [selectedOption]: updatedList,
      // });
    } catch (error) {
      console.log("Failed to update data:", error);
    }
  };
  const renderList = () => {
    switch (selectedOption) {
      case "industry":
        return (
          <>
            <div className="flex justify-between items-center">
              <input type="text" placeholder="Add industry" className="border border-gray-300 px-2 py-1 w-full" />
              <button onClick={addItem} className="bg-green-500 hover:bg-green-600 text-white font-bold px-2 py-1 rounded-lg ml-2">+</button>
            </div>
            <ul className="w-full space-y-2 mt-2">
              {industries.map((industry, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{industry}</span>
                  <button onClick={() => deleteItem(industry)} className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded-lg">-</button>
                </li>
              ))}
            </ul>
          </>
        );
      case "targetAudience":
        return (
          <>
            <div className="flex justify-between items-center">
              <input type="text" placeholder="Add target audience" className="border border-gray-300 px-2 py-1 w-full" />
              <button onClick={addItem} className="bg-green-500 hover:bg-green-600 text-white font-bold px-2 py-1 rounded-lg ml-2">+</button>
            </div>
            <ul className="w-full space-y-2 mt-2">
              {targetAudiences.map((targetAudience, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{targetAudience}</span>
                  <button onClick={() => deleteItem(targetAudience)} className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded-lg">-</button>
                </li>
              ))}
            </ul>
          </>
        );
      case "postType":
        return (
          <>
            <div className="flex justify-between items-center">
              <input type="text" placeholder="Add post type" className="border border-gray-300 px-2 py-1 w-full" />
              <button onClick={addItem} className="bg-green-500 hover:bg-green-600 text-white font-bold px-2 py-1 rounded-lg ml-2">+</button>
            </div>
            <ul className="w-full space-y-2 mt-2">
              {postTypes.map((postType, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{postType}</span>
                  <button onClick={() => deleteItem(postType)} className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded-lg">-</button>
                </li>
              ))}
            </ul>
          </>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-[90vh] border-r border-gray-200 items-start justify-start flex flex-col w-full">
      <div className="w-full items-start justify-start flex flex-col px-6 pt-12 pb-6">
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Analytics</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Vercel</button>
        </div>
        <h1 className="font-bold text-xl xl:text-2xl pb-2">Filters</h1>
        <ul className="w-full space-y-2">
        <li
              className={`cursor-pointer ${
                selectedOption === "industry" ? "font-bold" : ""
              }`}
              onClick={() => handleOptionClick("industry")}
            >
              Industry
            </li>
            <li
              className={`cursor-pointer ${
                selectedOption === "targetAudience" ? "font-bold" : ""
              }`}
              onClick={() => handleOptionClick("targetAudience")}
            >
              Target Audience
            </li>
            <li
              className={`cursor-pointer ${
                selectedOption === "postType" ? "font-bold" : ""
              }`}
              onClick={() => handleOptionClick("postType")}
            >
              Post Type
            </li>
          </ul>
        </div>
        {showList && <div className="w-full px-6 mt-4">{renderList()}</div>}
      </div>
  );
}

export default LeftBar;
