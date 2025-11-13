import React, { useState, useEffect } from "react";

const Home = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  }; 
  const handleStop = () => {
    setIsRunning(false);
  };

  const handleRestart = () => {
    setTime(0);
    setIsRunning(false);
  };

  const handleTheme = () => {
    setIsDark(!isDark);
  }

  const formatTime = (timeInSeconds) => {
    const timeInminutes = Math.floor(timeInSeconds / 60);
    const minutes = timeInminutes % 60;
    const hours = Math.floor(timeInminutes / 60);
    const seconds = timeInSeconds % 60;
    return (
      (hours < 10 ? "0" : "") +
      hours +
      " : " +
      (minutes < 10 ? "0" : "") +
      minutes +
      " : " +
      (seconds < 10 ? "0" : "") +
      seconds
    );
  };

  return (
    <div className={"w-screen h-screen flex justify-center pt-28 " +  (isDark ? "bg-black" : "bg-white")}>
      <div className="w-3/12 h-56 flex flex-col justify-center items-center rounded-lg p-4 m-4 gap-4 bg-purple-100 shadow-2xl border border-gray-200">
        <h1 className="font-bold text-xl">Stopwatch</h1>
        <h1 onClick={handleTheme}> {isDark? "Light" : "Dark"}</h1>
        <p>{formatTime(time)}</p>
        <div>
          {!isRunning && <button
            className="p-2 px-4 gap-2 m-2 bg-purple-900 rounded-full text-white cursor-pointer border"
            onClick={handleStart}
          >
            Start
          </button>}
          {isRunning && <button
            className="p-2 px-4 gap-2 m-2 bg-purple-900 rounded-full text-white cursor-pointer"
            onClick={handleStop}
          >
            Stop
          </button>}
          <button
            className="p-2 px-4 gap-2 m-2 bg-purple-900 rounded-full text-white cursor-pointer"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React, { useState, useEffect } from "react";

// export default function Home() {
//   const [time, setTime] = useState(0);       // timer value
//   const [isRunning, setIsRunning] = useState(false); // play/pause state

//   useEffect(() => {
//     let interval;
//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 1); // increment every second
//       }, 1000);
//     }
//     return () => clearInterval(interval); // cleanup
//   }, [isRunning]);

//   const handleReset = () => {
//     setTime(0);
//     setIsRunning(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen gap-4 text-xl">
//       <h1 className="text-2xl font-bold">⏱ React Timer</h1>
//       <p className="text-3xl">{time} sec</p>
//       <div className="flex gap-3">
//         <button
//           onClick={() => setIsRunning(true)}
//           className="px-4 py-2 bg-green-500 text-white rounded-xl shadow"
//         >
//           Play ▶
//         </button>
//         <button
//           onClick={() => setIsRunning(false)}
//           className="px-4 py-2 bg-yellow-500 text-white rounded-xl shadow"
//         >
//           Pause ⏸
//         </button>
//         <button
//           onClick={handleReset}
//           className="px-4 py-2 bg-red-500 text-white rounded-xl shadow"
//         >
//           Reset 🔄
//         </button>
//       </div>
//     </div>
//   );
// }
