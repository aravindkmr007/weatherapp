import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React from 'react'

function App() {

  return (
    <div className="App row">
      <Navbar  />
      <Home />

    </div>
  );
}

export default App;
