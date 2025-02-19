import './App.css';
import React, { useState } from 'react';
import Duration from "./components/DurationFolder/DurationPage";
import Rep from "./components/RepFolder";  

function App() {
  const [showPageDuration, setShowPageDuration] = useState(false);
  const [showPageRep, setShowPageRep] = useState(false);
  const [exercise, setExercise] = useState(''); 
  const [isPromptVisible, setIsPromptVisible] = useState(false); 


  const handleExerciseSelection = (exerciseType) => {
    setExercise(exerciseType);
    setIsPromptVisible(true); 
  };

  const handleRepDurationSelection = (selection) => {
    if (selection === "Duration") {
      setShowPageDuration(true);
      setShowPageRep(false);
    } else if (selection === "Rep") {
      setShowPageRep(true);
      setShowPageDuration(false);
    }
    setIsPromptVisible(false); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pick an exercise!</h1>


        <button onClick={() => handleExerciseSelection('Push-up')}>Push-up</button>
        <button onClick={() => handleExerciseSelection('Plank')}>Plank</button>
        <button onClick={() => handleExerciseSelection('Running')}>Running</button>


        {isPromptVisible && (
          <div className="prompt">
            <p>Would you like to track by Duration or Rep for {exercise}?</p>
            <button onClick={() => handleRepDurationSelection("Duration")}>Duration</button>
            <button onClick={() => handleRepDurationSelection("Rep")}>Rep</button>
          </div>
        )}


        {showPageDuration && <Duration />} 
        {showPageRep && <Rep />}

      </header>
    </div>
  );
}

export default App;
