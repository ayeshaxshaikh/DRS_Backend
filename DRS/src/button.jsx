import React from "react";
import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

const socket = io("https://drs-frontend.onrender.com");

function TimerControl() {
  function handleButtonClick() {
    socket.emit("startTimer");
    return;
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
      <button onClick={handleButtonClick} style={{ padding: "10px" }}>
        Start Timer
      </button>
    </div>
  );
}

export default TimerControl;
