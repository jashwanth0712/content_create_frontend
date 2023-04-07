import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';


const Forms = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const params = useParams()
  const [prompt, setPrompt] = useState('');
  const [paragraph, setParagraph] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const prompt = `create a ${postType} social media content for ${targetAudience} with a seriousness tone of ${tone} percentage : topic of the content is ${paragraph}`;
    try {
      const response = await fetch(`https://create-content-1.vercel.app/generate-text?text=${prompt}`);
      const data = await response.json();
      setResult(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
<div>
{loading &&   <div className="hidden md:flex md:flex-1 md:justify-center md:w-50 md:h-50">
        <Player
          src='https://assets7.lottiefiles.com/packages/lf20_poqmycwy.json'
          className="player"
          loop
          autoplay
        />
      </div>}
  
      {!loading && <form onSubmit={handleSubmit} className="flex flex-col items-center">
         <div>
     
         <div className="grid grid-cols-2 gap-4">
  <div>
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
  <div>
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
   
     </div>

      <label htmlFor="paragraph" className="mt-8 font-bold text-lg">
        Enter additional data
      </label>
      <textarea
        id="paragraph"
        className="w-full px-3 py-2 mt-4 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
        rows="4"
        value={paragraph}
        onChange={(e) => setParagraph(e.target.value)}
      />
      <button
        type="submit"
        className="w-full px-6 py-3 mt-8 font-bold text-white uppercase bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
 
        </form>}
        {result && <div>{result}</div>}
</div>

 
  );
}
export default Forms;
