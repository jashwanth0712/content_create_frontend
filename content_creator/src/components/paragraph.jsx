import React from 'react';
import { useLocation } from 'react-router-dom';

const Paragraph = () => {
    const location = useLocation();
    const Result = location.state && location.state.data;
    console.log(Result)
    const str = Result;
    const lines = str.split("\n"); // split the string by newline character
    const firstLine = lines[0]; // extract the first line
    const remainingLines = lines.slice(1).join("\n"); // extract the remaining lines and join them back using newline character
    console.log(firstLine); // "day"
    console.log(remainingLines);
    // Check if the state contains the 'result' key and assign it to the Result variable

    const handleCopy = () => {
        navigator.clipboard.writeText(Result);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Result',
                    text: Result,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            alert('Web Share API not supported in your browser');
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h2 className="text-xl font-semibold mb-4 z-50">{firstLine}</h2>

            <p className="text-gray-800 text-lg leading-7 border-l-4 border-blue-500 pl-4">
                {remainingLines}
            </p>

            <div className="mt-4 flex space-x-4">
                <button
                    onClick={handleCopy}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Copy
                </button>

                <button
                    onClick={handleShare}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Share
                </button>
            </div>
        </div>
    )
};

export default Paragraph;
