import './App.css';
import React, { useState } from 'react';
import { Duration } from './components/duration'; 

function App() {
  const [showPageDuration, setShowPageDuration] = useState(false); 

  const handleClick = () => {
    setShowPageDuration(true); 
  };

  return (
    <div className="App">
      <header className="App-header">

        <h1>Pick an exercise!</h1>

        <button onClick={handleClick}>Push-up</button>
        <button>Plank</button>
        <button>Running</button>

        {showPageDuration && <Duration />} 

      </header>
    </div>
  );
}

export default App;
