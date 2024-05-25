import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-full flex justify-center items-center p-2 text-white">
      <Link to={"/"}>
        <div className=" p-3 m-2 bg-purple-800 rounded-xl">
          <button>Stopwatch</button>
        </div>
      </Link>

      <Link to={"/seller"}>
        <div className=" p-3 m-2 bg-purple-800 rounded-xl">
          <button>Seller</button>
        </div>
      </Link>

      <Link to={"/inventory"}>
        <div className=" p-3 m-2 bg-purple-800 rounded-xl">
          <button>Inventory</button>
        </div>
      </Link>

      <Link to={"/todo"}>
        <div className=" p-3 m-2 bg-purple-800 rounded-xl">
          <button>Todo</button>
        </div>
      </Link>

      <Link to={"/pagination"}>
        <div className=" p-3 m-2 bg-purple-800 rounded-xl">
          <button>Pagination</button>
        </div>
      </Link>
      <Link to={"/file"}>
        <div className=" p-3 m-2 bg-purple-800 rounded-xl">
          <button>File</button>
        </div>
      </Link>
      <Link to={"/form"}>
        <div className=" p-3 m-2 bg-purple-800 rounded-xl">
          <button>Form</button>
        </div>
      </Link>
      <Link to={"/emi"}>
        <div className=" p-3 m-2 bg-purple-800 rounded-xl">
          <button>EMI</button>
        </div>
      </Link>
      <Link to={"/job"}>
        <div className=" p-3 m-2 bg-purple-800 rounded-xl">
          <button>JOB</button>
        </div>
      </Link>
      <Link to={"/login"}>
        <div className=" p-3 m-2 bg-purple-800 rounded-xl">
          <button>Login</button>
        </div>
      </Link>
    </div>
  );
};

export default Header;

