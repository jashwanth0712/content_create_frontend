import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

const Forms = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [prompt, setPrompt] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [postType, setPostType] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [tone, setTone] = useState(50);
  const [copied, setCopied] = useState(false);
  const code = `console.log("Hello, world!");`;

  const navigateTo = useNavigate();
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    
    // Fetch the admin emails from the endpoint
    fetch('http://localhost:3000/admin')
      .then(response => response.json())
      .then(data => {
        setPostTypeOptions(data.type_of_post);
        setTargetAudienceOptions(data.target_audience)
      })
      .catch(error => {
        console.error('Failed to fetch admin emails:', error);
      });

  }, []);

  const [postTypeOptions, setPostTypeOptions] = useState([]);
  const [targetAudienceOptions, setTargetAudienceOptions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const prompt = `create a small ${postType} social media content  for ${targetAudience} with a seriousness tone of ${tone} percentage : topic of the content is ${paragraph}`;

    try {
           // Patch the generated text to the endpoint
           const emailId = localStorage.getItem('userEmail'); // Replace with the actual email ID
           const user_req = await fetch(`https://fine-cyan-cockatoo-sari.cyclic.app/my-collection/${emailId}`);
           const user_txt=await user_req.text()
           const user_data=JSON.parse(user_txt);
           const remaining_prompts=user_data.remaining
           const prev_prompts=user_data.prompts;
           console.log("prev prompt is ",prev_prompts)
           console.log("data is ",user_data)
           console.log("remaining is ",user_data.remaining)
           console.log("remainingj is ",user_data['remaining'])
           const patchEndpoint = `https://fine-cyan-cockatoo-sari.cyclic.app/my-collection/${emailId}`;
       
           
           if(remaining_prompts<10){
             navigateTo('/expired');
             return
           }

      // Fetch generated text
      const response = await fetch(`https://create-content-1.vercel.app/generate-text?text=${prompt}`);
      const data = await response.text();
      console.log(data)

      // Fetch tags
      const tagsPrompt = `${data}: give best tag that can be given for the above content separated by spaces`;
      const tagsResponse = await fetch(`https://create-content-1.vercel.app/generate-text?text=${tagsPrompt}`);
      const tags_ = await tagsResponse.text();
      const hashtagsList = tags_
        .split(' ')
        .map((tag) => tag.replace(/^#+|#+$/g, ''))
        .filter((tag) => tag.trim().length > 0);
      const lines = data.split("\n"); // split the string by newline character
      const firstLine = lines[0]; // extract the first line
      const remainingLines = lines.slice(1).join("\n");
 
      
      console.log("patch endpoint is :",patchEndpoint)
      const patchData = {
        remaining:remaining_prompts-1,
        prompts: [
          ...prev_prompts,
          {
            tags: hashtagsList,
            heading: firstLine,
            bodyText: remainingLines,
            industry:  localStorage.getItem('selectedDomain'),
          },
        ],
      };

      const patchResponse = await fetch(patchEndpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patchData),
      });

      if (patchResponse.ok) {
        setResult(data);
        setLoading(false);
        navigateTo('/result', { state: { data } });
      } else {
        throw new Error('Failed to patch the generated text to the endpoint.');
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      navigateTo('/result', { state: { prompt } });
    }
  };

  return (
    <div>
      {loading && (
        <div className="hidden md:flex md:flex-1 md:justify-center md:w-50 md:h-50">
          <Player
            src="https://assets7.lottiefiles.com/packages/lf20_poqmycwy.json"
            className="player"
            loop
            autoplay
          />
        </div>
      )}

      {!loading && (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          {/* ...existing code... */}

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
                  {postTypeOptions.map((type) => (
                    <option value={type.toLowerCase()} key={type}>
                      {type}
                    </option>
                  ))}
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
                  {targetAudienceOptions.map((audience) => (
                    <option value={audience.toLowerCase()} key={audience}>
                      {audience}
                    </option>
                  ))}
                </select>
              </div>
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
        </form>
      )}
      {result && <div>{result}</div>}
    </div>
  );
}

export default Forms;

