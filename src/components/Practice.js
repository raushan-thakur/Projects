import React, { useState, useRef } from "react";

const Practice =()=> {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  return (
    <div>
      <p>CountRef: {countRef.current}</p>
      <button className="m-2 p-2 bg-green-800 text-white rounded"
        onClick={() => {
          countRef.current++;
          console.log(countRef.current);
        }}
      >
        Increment Ref
      </button>
       <p>Count: {count}</p>
      <button className="m-2 p-2 bg-green-800 text-white rounded"
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Increment
      </button>
    </div>
  );
}


export default Practice