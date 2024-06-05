import React, { useState } from 'react';
import run from '../../apiCalls/getBookSummaryAndInsights';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookName, setBookName] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    // Reset summary and error when chatbot is closed
    if (!isOpen) {
      setSummary('');
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the API to get the summary
      const response = await run(bookName);
      // Check if the response has a summary
      if (response) {
        // Set the summary in the state
        setSummary(response);
        // Clear error if any
        setError('');
      } else {
        throw new Error('Summary not found in response');
      }
    } catch (error) {
      console.error('Error fetching book summary:', error);
      // Set error message in the state
      setError('Failed to fetch book summary.');
      // Clear summary
      setSummary('');
    }
    // Clear book name input
    setBookName('');
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div className={`bg-white p-4 rounded shadow-lg transition-all ${isOpen ? 'block' : 'hidden'}`}>
        <h2 className="text-lg mb-2">Chatbot</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Enter the book name:</label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            className="border p-2 mb-2 w-full"
            placeholder="Book Name"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
            Submit
          </button>
        </form>
        {/* Display summary if available */}
        {summary && (
          <div className="mt-2">
            <h3 className="text-lg font-semibold mb-1">Summary:</h3>
            <p>{summary}</p>
          </div>
        )}
        {/* Display error message if any */}
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
      {/* Chatbot toggle button */}
      <button onClick={toggleChatbot} className="bg-blue-500 text-white p-4 rounded-full shadow-lg">
        {isOpen ? 'Close' : 'Chat'}
      </button>
    </div>
  );
};

export default Chatbot;
