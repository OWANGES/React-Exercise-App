import React, { useState, useEffect, useRef } from "react";

const Duration = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      console.log("Starting timer...");
      intervalIdRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      console.log("Stopping timer...");
      clearInterval(intervalIdRef.current);
    }


    return () => {
      console.log("Cleaning up interval...");
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]); 

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1>{seconds}s</h1>
      <button onClick={handleStartStop}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Duration;
