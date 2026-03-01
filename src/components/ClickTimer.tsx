'use client';
import { useState, useEffect } from 'react';

export default function ClickTimer() {
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleClick = () => {
    if (timeLeft === 0) return; // If times over stop
    if (!isActive) setIsActive(true); // Start timer on first click
    setClicks((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h2 className="text-xl font-bold">No of Clicks until timer expires</h2>
      <div className="bg-orange-300 w-64 h-64 flex flex-col items-center justify-center p-4 rounded shadow-md gap-4">
        <span className="text-6xl font-black">{clicks}</span>
        <span className="text-lg font-bold">Time left: {timeLeft} seconds</span>
        <button 
          onClick={handleClick}
          disabled={timeLeft === 0}
          className="bg-gray-200 border border-gray-400 px-4 py-2 rounded shadow active:bg-gray-300 disabled:opacity-50"
        >
          +
        </button>
      </div>
    </div>
  );
}