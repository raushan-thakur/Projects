import React, { useEffect, useState } from "react";

const Cards = ({ item, handleClick }) => (
  <div className="flex w-[32%]  items-center flex-col border border-slate-400 rounded-lg"  onClick={() => handleClick(item)}>
    <button className="text-blue-700">
      {item.username}
    </button>
    <p>{item.email}</p>
    <p>{item.phone}</p>
  </div>
);

const Project = () => {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState(null);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    //console.log(result);
    setData(result);
  };

  const handleClick = (items) => setCardData(items);
  const handleBackClick = () =>{
    setCardData(null);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="p-2 m-2 font-bold text-3xl flex justify-center">
        User Details
      </div>
      {cardData ? (
        <div className="flex justify-center">
          <div className="text-center ">
            <div className="p-2 border rounded-lg" onClick={handleBackClick}> 🔙</div>
            <button className="text-blue-700">{cardData.username}</button>
            <p>{cardData.email}</p>
            <p>{cardData.phone}</p>
            <p>{cardData.name}</p>
            <p>{cardData.website}</p>
            <p>{cardData.address.city}</p>
            <p>{cardData.address.street}</p>
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-wrap flex-row gap-2 m-2 p-2 ">
          {data.map((user) => (
            <Cards key={user.id} item={user} handleClick={handleClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
