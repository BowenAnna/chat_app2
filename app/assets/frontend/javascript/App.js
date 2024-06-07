import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Chat from './components/Chat';

function App() {
  fetch("http://www.randomnumberapi.com/api/v1.0/random")
  .then((responce) => 
  {
    return responce.json()
  }).then((res) => 
  {
    console.log(res);
  })



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
