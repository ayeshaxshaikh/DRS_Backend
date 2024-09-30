
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Timer.css';
import background_video from '../assets/background-video.mp4';

const socket = io('https://drs-frontend-1.onrender.com');


function Timer() {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    socket.on('timerUpdate', (newTime) => {
      setTimer(newTime);
    });

    socket.emit('startTimer');

    return () => {
      socket.off('timerUpdate');  
    };
  }, []);

  return (
    <div className='container'>
     
      <video autoPlay muted loop id="background-video">
        <source src={background_video} type="video/mp4" />
      </video>

 
      <div className="timer-container">
        <div className='text'>
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
