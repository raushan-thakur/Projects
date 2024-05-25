import React, { useState, useEffect } from "react";

const TodoData = () => {
  const [data, setData] = useState([]);
  const [del, setDel] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const users = await res.json();
    setData(users);
    setDel(new Array(users.length).fill(false));
  };

  const handleDelete = (ind) => {
    const newDel = [...del];
    newDel[ind] = true;
    setDel(newDel);
  };

  const handleCompleted = (ind) => {
    const newData = [...data];
    newData[ind].completed = true;
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderTodos = (filterFn) => {
    return data.map((ele, ind) => {
      if (filterFn(ele, ind)) {
        return (
          <div
            key={ind}
            className="border flex justify-between border-blue-600 rounded-lg m-1 p-2"
          >
            <h1>{ele?.title}</h1>
            <div className="flex">
              {!ele.completed &&  (
                <button onClick={() => handleCompleted(ind)}>✅</button>
              )}
              <button onClick={() => handleDelete(ind)}>🗑️</button>
            </div>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="h-vh w-vw p-2 m-10 border border-blue-600 rounded-lg">
      <div className="p-8  border border-blue-600 rounded-lg text-center">
        ToDo List
      </div>
      <div className=" mt-2  rounded-lg flex gap-8 justify-between">
        <div className=" border border-blue-600 rounded-lg w-1/3">
          <div className="p-6  text-center border border-blue-600 rounded-lg">
            <h1>Pending Task</h1>
          </div>
          <div className="h-80 overflow-scroll">
            {renderTodos((ele, ind) => !ele.completed && !del[ind])}
          </div>
          
        </div>
        <div className=" border border-blue-600 rounded-lg w-1/3">
          <div className="p-6  text-center border border-blue-600 rounded-lg">
            <h1>Completed Task</h1>
          </div>
          <div className="h-80 overflow-scroll">
          {renderTodos((ele, ind) => ele.completed && !del[ind])}
          </div>
          
        </div>
        <div className=" border border-blue-600 rounded-lg w-1/3">
          <div className="p-6  text-center border border-blue-600 rounded-lg">
            <h1>Deleted Task</h1>
          </div>
          <div className="h-80 overflow-scroll">
          {renderTodos((ele, ind) => del[ind])}
          </div>
          
        </div>
       
      </div>
    </div>
  );
};

export default TodoData;
