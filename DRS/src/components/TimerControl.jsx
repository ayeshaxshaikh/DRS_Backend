
import React from "react";
import { io } from "socket.io-client";

const socket = io('https://drs-frontend-1.onrender.com');


function TimerControl() {
  function handleStartButtonClick() {
    socket.emit("startTimer");
  }

  function handleResetButtonClick() {
    socket.emit("resetTimer");
  }

  return (
    <div
      className="control-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={handleStartButtonClick} style={{ padding: "10px", marginRight: "10px" }}>
        Start Timer
      </button>
      <button onClick={handleResetButtonClick} style={{ padding: "10px" }}>
        Reset Timer
      </button>
    </div>
  );
}

export default TimerControl;
