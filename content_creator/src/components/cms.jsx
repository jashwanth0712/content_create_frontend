import { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

function Content_manager() {
  const [data, setData] = useState([]);
  const [activeTags, setActiveTags] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const emailId = localStorage.getItem('userEmail'); // Replace with the actual email ID
      const response = await fetch(`https://fine-cyan-cockatoo-sari.cyclic.app/my-collection/${emailId}`);
      const outData = await response.json();
      const jsonData = outData.prompts;
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const tagCounts = {};
  data.forEach((item) => {
    item.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]);
  const topTags = sortedTags.slice(0, 6);

  const toggleTag = (tag) => {
    if (activeTags?.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags((prevTags) => (prevTags ? [...prevTags, tag] : [tag]));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-200 py-2 px-4 mb-4 flex">
        {topTags.map((tag) => (
          <button
            key={tag}
            className={`mr-4 px-2 py-1 rounded-lg ${
              activeTags?.includes(tag)
                ? 'bg-gray-500 text-white'
                : 'bg-white text-gray-800'
            }`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : activeTags ? (
        <div className="block">
          <h2 className="text-2xl font-bold mb-4">{activeTags.join(', ')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data
              .filter((item) => item.tags.some((tag) => activeTags.includes(tag)))
              .map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-lg font-bold mb-2">{item.heading}</h3>
                  <p className="mb-2">{item.bodyText}</p>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center hidden md:flex md:flex-2 md:w-2/3">
          <Player
            src="https://assets3.lottiefiles.com/packages/lf20_x62chJ.json"
            className="w-1/2 h-1/2 mx-auto"
            loop
            autoplay
          />
        </div>
      )}
    </div>
  );
}

export default Content_manager;
