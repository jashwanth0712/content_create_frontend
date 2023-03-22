import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';


const Forms = () => {
  const params = useParams()
  const [prompt, setPrompt] = useState('');
  const [postType, setPostType] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [tone, setTone] = useState(50);
  const [copied, setCopied] = useState(false);
  const code = `console.log("Hello, world!");`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-screen-md w-full mx-auto flex flex-wrap justify-between">
       <div className="flex flex-col items-center h-full w-1/2 bg-gray-100 rounded-lg shadow-lg p-6">
      <textarea
        className="w-full h-48 bg-white border border-gray-300 rounded-lg p-2 font-mono text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        value={code}
        
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium focus:outline-none hover:bg-blue-600"
        onClick={handleCopy}
      >
        {copied ? "Submitted!" : "Submit"}
      </button>
    </div>

    
      <div>
        {/* <h1>{params.domain}</h1> 
        <label htmlFor="prompt" className="block text-gray-700 font-bold mb-2">
          Prompt
        </label>
      <div className="mb-6">
      
        <input
          type="text"
          id="prompt"
          name="prompt"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div> */}
      <div className="mb-6">
        <label htmlFor="post-type" className="block text-gray-700 font-bold mb-2">
          Type of Social Media Post
        </label>
        <select
          id="post-type"
          name="post-type"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={postType}
          onChange={(e) => setPostType(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="status">Status</option>
          <option value="quote">Quote</option>
          <option value="question">Question</option>
          <option value="poll">Poll</option>
          <option value="review">Review</option>
          <option value="announcement">Announcement</option>
          <option value="testimonial">Testimonial</option>
          <option value="fact">Fact</option>
          <option value="joke">Joke</option>
          <option value="motivational">Motivational</option>
          <option value="event">Event</option>
          <option value="how-to">How-to</option>
          <option value="story">Story</option>
          <option value="listicle">Listicle</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="target-audience" className="block text-gray-700 font-bold mb-2">
          Target Audience
        </label>
        <select
          id="target-audience"
          name="target-audience"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="general">General</option>
          <option value="youth">Youth</option>
          <option value="senior">Senior</option>
          <option value="millennial">Millennial</option>
          <option value="gen-z">Gen Z</option>
          <option value="parents">Parents</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="business">Business</option>
          <option value="students">Students</option>
          <option value="professionals">Professionals</option>
          <option value="families">Families</option>
          <option value="travelers">Travelers</option>
          <option value="fitness enthusiasts">Fitness enthusiasts</option>
          <option value="foodies">Foodies</option>
          <option value="gamers">Gamers</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="tone" className="block text-gray-700 font-bold mb-2">
          Tone (seriousness) ({tone})
        </label>
        <input
          type="range"
          id="tone"
          name="tone"
          min="0"
          max="100"
          step="1"
          className="w-full"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
      </div>
    </form>
 
  );
}
export default Forms;
