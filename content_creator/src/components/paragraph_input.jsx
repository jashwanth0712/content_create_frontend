import { useState } from 'react';

function ParagraphInput() {
  const [paragraph, setParagraph] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(paragraph);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
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
  );
}
export default ParagraphInput;