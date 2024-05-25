import React from "react";
import Header from "./components/Header";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Inventory from "./components/inventory/Inventory";

import Todo from "./components/Todo/Todo";
import Pagination from "./components/Pagination/pagination";
import FileExplorer from './components/FileExplorer/fileExplorer';
import Form from "./components/Form/Form";
import Seller from './components/seller/Seller';
import Emi from "./components/Emi/Emi";
import Job from "./components/Job/Job";
import Home from "./components/Home";
import Login from "./components/LoginTodo/Login";
import TodoData from "./components/LoginTodo/TodoData";

const App = () => {
  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Header />,
  //   },
  //   {
  //     path: "/seller",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/inventory",
  //     element: <Inventory />,
  //   },
  //   {
  //     path: "/todo",
  //     element: <Todo />,
  //   },
  // ]);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/seller" element={<Seller />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/file" element={<FileExplorer />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/emi" element={<Emi />}></Route>
          <Route path="/job" element={<Job />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/login/todo" element={<TodoData />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;


