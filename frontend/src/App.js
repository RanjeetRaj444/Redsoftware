// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Story from './components/Story';
import CreateStory from './components/CreateStory';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/story/:id" element={<Story />} />
        <Route path="/create" element={<CreateStory />} />
      </Routes>
    </Router>
  );
}

export default App;
