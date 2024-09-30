
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Timer.css';
import background_video from '../assets/background-video.mp4';

const socket = io('https://drs-frontend-1.onrender.com');


function Timer() {
  const [timer, setTimer] = useState(15);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    socket.on('timerUpdate', (newTime) => {
      setTimer(newTime);
      if (newTime === 0){
        setIsHidden(true);
      }
    });

    socket.on('resetTimer', () => {
      setIsHidden(true);
    });

    socket.emit('startTimer');

    return () => {
      socket.off('timerUpdate'); 
      socket.off('resetTimer');  
    };
  }, []);

  return (
    <div className={`container ${isHidden} ? 'hidden-background' : 'show-background'`}>
     
      {!isHidden && (
        <>
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
        </>
      )}

    </div>
  );
}

export default Timer;
