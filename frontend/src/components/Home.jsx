// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await axios.get('https://redsoftware-backend.onrender.com/stories');
      setStories(response.data);
    };

    fetchStories();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map(story => (
          <div key={story.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold">{story.title}</h2>
            <p className="mt-2">{story.firstSentence}</p>
            <p className="mt-2 text-gray-600">Status: {story.completed ? 'Completed' : 'Ongoing'}</p>
            <Link to={`/story/${story.id}`} className="text-blue-500 mt-4 block">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
