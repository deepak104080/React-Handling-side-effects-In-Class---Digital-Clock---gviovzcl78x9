import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  let tempTime = new Date().toLocaleString();
  const [dateTime, setDateTime] = useState(tempTime);

  const updateTime = () => {
    let tempTime = new Date().toLocaleString();
    setDateTime(tempTime);
  };

  useEffect(() => {
    let ret = setInterval(updateTime, 1000);
    return () => {
      clearInterval(ret);
    };
  }, []);

  return (
    <div id="main">
      <div className="date-time">{dateTime}</div>
    </div>
  );
};

export default App;
