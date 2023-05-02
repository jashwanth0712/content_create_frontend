import React, { useState } from "react";

function LeftBar() {
  const [showList, setShowList] = useState(false);



  const [industries, setIndustries] = useState([
    { id: 1, name: "Technology" },
    { id: 2, name: "Healthcare" },
    { id: 3, name: "Education" },
    { id: 4, name: "Retail" },
  ]);
  
  const [targetAudiences, setTargetAudiences] = useState([
    { id: 1, name: "Millennials" },
    { id: 2, name: "Gen Z" },
    { id: 3, name: "Parents" },
    { id: 4, name: "Seniors" },
  ]);

  const [postTypes, setPostTypes] = useState([
    { id: 1, name: "Blog Post" },
    { id: 2, name: "Infographic" },
    { id: 3, name: "Video" },
    { id: 4, name: "Podcast" },
  ]);

  const [selectedOption, setSelectedOption] = useState("industry");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowList(true);
  };

  const renderList = () => {
    const addItem = (e) => {
      e.preventDefault();
      const itemName = e.target.parentNode.firstChild.value;
      if (itemName !== "") {
        switch (selectedOption) {
          case "industry":
            setIndustries([...industries, { id: industries.length + 1, name: itemName }]);
            break;
          case "targetAudience":
            setTargetAudiences([...targetAudiences, { id: targetAudiences.length + 1, name: itemName }]);
            break;
          case "postType":
            setPostTypes([...postTypes, { id: postTypes.length + 1, name: itemName }]);
            break;
          default:
            break;
        }
        e.target.parentNode.firstChild.value = "";
      }
    };

    const deleteItem = (itemId) => {
      switch (selectedOption) {
        case "industry":
          setIndustries(industries.filter((industry) => industry.id !== itemId));
          break;
        case "targetAudience":
          setTargetAudiences(targetAudiences.filter((targetAudience) => targetAudience.id !== itemId));
          break;
        case "postType":
          setPostTypes(postTypes.filter((postType) => postType.id !== itemId));
          break;
        default:
          break;
      }
    };
    switch (selectedOption) {
      case "industry":
        return (
          <>
            <div className="flex justify-between items-center">
              <input type="text" placeholder="Add industry" className="border border-gray-300 px-2 py-1 w-full" />
              <button onClick={addItem} className="bg-green-500 hover:bg-green-600 text-white font-bold px-2 py-1 rounded-lg ml-2">+</button>
            </div>
            <ul className="w-full space-y-2 mt-2">
              {industries.map((industry) => (
                <li key={industry.id} className="flex justify-between items-center">
                  <span>{industry.name}</span>
                  <button onClick={() => deleteItem(industry.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded-lg">-</button>
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
              {targetAudiences.map((targetAudience) => (
                <li key={targetAudience.id} className="flex justify-between items-center">
                  <span>{targetAudience.name}</span>
                  <button onClick={() => deleteItem(targetAudience.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded-lg">-</button>
                </li>
              ))}
            </ul>
          </>
        );
        case "postType":
          return (
            <>
              <div className="flex justify-between items-center">
                <input type="text" placeholder="Add target audience" className="border border-gray-300 px-2 py-1 w-full" />
                <button onClick={addItem} className="bg-green-500 hover:bg-green-600 text-white font-bold px-2 py-1 rounded-lg ml-2">+</button>
              </div>
              <ul className="w-full space-y-2 mt-2">
                {postTypes.map((postType) => (
                  <li key={postType.id} className="flex justify-between items-center">
                    <span>{postType.name}</span>
                    <button onClick={() => deleteItem(postType.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded-lg">-</button>
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
              selectedOption === "industry" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleOptionClick("industry")}
          >
            <span>Industry</span>
          </li>
          <li
            className={`cursor-pointer ${
              selectedOption === "targetAudience" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleOptionClick("targetAudience")}
          >
            <span>Target Audience</span>
          </li>
          <li
            className={`cursor-pointer ${
              selectedOption === "postType" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleOptionClick("postType")}
          >
            <span>Post Type</span>
          </li>
        </ul>
        {showList && (
          <div className="w-full space-y-2 mt-6">
            <h1 className="font-bold text-xl xl:text-2xl pb-2">
              {selectedOption === "industry"
                ? "Industries"
                : selectedOption === "targetAudience"
                ? "Target Audience"
                : selectedOption === "postType"
                ? "Post Types"
                : ""}
            </h1>
            <ul className="w-full space-y-2">{renderList()}</ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default LeftBar;
