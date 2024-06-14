import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Loading");


  useEffect(() => {
    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setStatus("Complete");
          clearInterval(id);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="progress-container">
        <h1>PROGRESS BAR</h1>
        <div className="progress">
          <div className="bar" style={{width : `${progress}%`}}></div>
        </div>
        <p>{progress} %   {status}</p>
      </div>
    </>
  );
}

export default App;