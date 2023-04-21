import React from 'react';

const AdminPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Admin Page</h1>
      <div className="flex flex-col items-center justify-center w-full max-w-lg">
        <div className="bg-white rounded-md p-8 mb-4">
          <h2 className="text-xl font-bold mb-4">Number of Users Received</h2>
          <p className="text-gray-700">100</p>
        </div>
        <div className="bg-white rounded-md p-8 mb-4">
          <h2 className="text-xl font-bold mb-4">Tags Called More</h2>
          <ul className="list-disc pl-4">
            <li className="text-gray-700">React</li>
            <li className="text-gray-700">JavaScript</li>
            <li className="text-gray-700">CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
