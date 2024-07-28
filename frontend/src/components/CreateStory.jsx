// src/components/CreateStory.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateStory = () => {
  const [title, setTitle] = useState('');
  const [firstSentence, setFirstSentence] = useState('');
  const [maxContributions, setMaxContributions] = useState(10);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleCreateStory = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://redsoftware-backend.onrender.com/stories', {
        title,
        firstSentence,
        maxContributions,
        authorId: user.id,
      });
      navigate('/');
    } catch (error) {
      alert('Failed to create story');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleCreateStory} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Create Story</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1" htmlFor="firstSentence">First Sentence</label>
          <input
            type="text"
            id="firstSentence"
            value={firstSentence}
            onChange={(e) => setFirstSentence(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-1" htmlFor="maxContributions">Max Contributions</label>
          <input
            type="number"
            id="maxContributions"
            value={maxContributions}
            onChange={(e) => setMaxContributions(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            min="1"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Create Story</button>
      </form>
    </div>
  );
};

export default CreateStory;
