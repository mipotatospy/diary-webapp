import React, { useRef, useState } from 'react';
import { useSyncExternalStore } from 'react';

export const Timer = ({ setCurrentTime, currentTime }) => {
    const [isTimerRunning, startTimer] = useState(false)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const intervalID = useRef(null);
    const startingTime = useRef(0);

    const startTaskTimer = () => {
        startTimer(true)
        if (intervalID.current) {
            clearInterval(intervalID.current);
        }
        startingTime.current = new Date();
        intervalID.current = setInterval(() => setTime(), 1000);
    };

    const setTime = () => {
        const elapsedTime = Math.floor((new Date() - startingTime.current) / 1000);
        setCurrentTime(elapsedTime);
        setMinutes( Math.floor((elapsedTime / 60) % 60))
        setSeconds(elapsedTime % 60)
    }

    const stopTime = () => {
        clearInterval(intervalID.current);
        startTimer(false)
    };

    return (
        <div className='timer'>

            { !isTimerRunning ? (
                <button onClick={startTaskTimer}>Start Timer</button>
            ) : (
                <button onClick={stopTime}>Stop Timer</button>
            )}
            <p>{minutes < 10 ? "0 " + minutes : minutes} : {seconds < 10 ? "0 " + seconds : seconds}</p>
        </div>
    );
};

