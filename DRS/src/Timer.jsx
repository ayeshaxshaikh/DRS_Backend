import React, { useEffect, useState } from "react";
import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";
import "./Timer.css";

const socket = io("https://drs-frontend.onrender.com");

function Timer() {
  const [timer, setTimer] = useState(15);
  let timerid;

  function handleTime() {
    timerid = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(timerid);
          return 15;
        }
        return prevTimer - 1;
      });
    }, 1000);
  }

  useEffect(() => {
    socket.on("startTimer", () => {
      handleTime();
    });

    return () => {
      socket.off("startTimer");
      clearInterval(timerid);
    };
  }, []);

  return (
    <div className="container">
      <div className="timer-container">
        <div className="text">
          <p>Review Timer</p>
        </div>
        <div className="timer-overlay">
          <p>{timer}</p>
        </div>
      </div>
    </div>
  );
}

export default Timer;
