import React from 'react';
import io from 'socket.io-client';

const socket = io('https://drs-frontend-1.onrender.com');

function TimerControl() {
  const handleStartTimer = () => {
    socket.emit('startTimer');  
  };

  return (
    <div className="control-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <button onClick={handleStartTimer} style={{padding: '10px'}}>Start Timer</button>
    </div>
  );
}

export default TimerControl;
