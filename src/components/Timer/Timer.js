import React, { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(300); // 300 seconds = 5 minutes
  const [isActive, setIsActive] = useState(false);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(300); // Reset to 5 minutes
  };

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-64 text-center">
        <h1 className="text-3xl font-semibold text-gray-700 mb-4">Countdown Timer</h1>
        <div
          className={`text-5xl font-mono mb-6 ${
            timeLeft === 0 ? "text-red-600" : "text-blue-600"
          }`}
        >
          {formatTime()}
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={toggleTimer}
            className={`px-4 py-2 rounded-lg text-white font-medium transition 
              ${isActive ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"}`}
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button
            onClick={resetTimer}
            className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
