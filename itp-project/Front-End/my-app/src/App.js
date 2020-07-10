import React from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import Navbar from './components/Layout/Nevbar'
import Slider from './components/Home/Slider/Slider'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
    </div>
  );
}

export default App;
