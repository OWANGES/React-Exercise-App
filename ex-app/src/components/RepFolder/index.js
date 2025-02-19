import React, { useState } from "react";

function Rep() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="appPage1">
      <h1>Rep Tracking</h1>
      <p>click the button to track reps!</p>
      <h2>Rep Count: {count}</h2>
      <button onClick={handleIncrement}>count up!</button>
    </div>
  );
}

export default Rep;

