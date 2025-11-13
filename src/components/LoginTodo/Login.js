import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const navigate = useNavigate();

  const handleSumit = async () => {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    });
    const data = await res.json();
    console.log(data);
    //if(res.ok) navigate("/login/todo")
    navigate("/login/todo");
    console.log(res);
  };
  return (
    <div className="flex h-screen justify-center pt-20 border border-blue-500 p-4 m-10 rounded-lg">
      <div>
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <input
            className="border border-blue-500 p-2 m-2 rounded-lg"
            type="text"
            value={userName}
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <input
            className="border border-blue-500 p-2 m-2 rounded-lg"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            onClick={handleSumit}
            className="border border-blue-500 p-2 m-2 rounded-lg bg-blue-600 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

//https://dummyjson.com/auth/login
// --header 'Content-Type: application/json' \
// --data '{
//     "username": "kminchelle",
//     "password": "0lelplR"
//   }'

//https://jsonplaceholder.typicode.com/todos

/*


*/
