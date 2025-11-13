import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo.trim() !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="min-h-screen flex justify-center ">
      <div className="flex h-vh p-10 pt-4 m-10 bg-slate-800 flex-col items-center text-white rounded-lg">
        <h1 className="text-2xl m-2 mb-4">Todo List App</h1>
        <form className="flex justify-center  w-96" onSubmit={handleSubmit}>
          <input
            className="text-black w-8/12 m-2 p-2"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            className="p-2 m-2 px-4 bg-slate-400 rounded-lg"
            type="submit"
          >
            {" "}
            {editId ? "Edit" : "Go"}
          </button>
        </form>

        <ul className="">
          {todos.map((t) => (
            <li className="rounded-lg m-2 p-2 bg-slate-700  pl-4 pr-1 flex items-center justify-between w-80">
              <span className="flex-grow" key={t.id}>
                {t.todo}
              </span>
              {editId !== t.id && (
                <div>
                  <button
                    className="p-2  bg-green-700 rounded-lg"
                    onClick={() => handleEdit(t.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="p-2 bg-red-700 rounded-lg"
                    onClick={() => handleDelete(t.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

// import React, { useState } from 'react';

// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [editIndex, setEditIndex] = useState(null);
//   const [editValue, setEditValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   const handleEditTodo = (index) => {
//     setEditIndex(index);
//     setEditValue(todos[index]);
//   };

//   const handleSaveEdit = (index) => {
//     const newTodos = [...todos];
//     newTodos[index] = editValue;
//     setTodos(newTodos);
//     setEditIndex(null);
//     setEditValue('');
//   };

//   return (
//     <div className="flex flex-col items-center  min-h-screen py-6 bg-gray-200">
//       <div className="bg-white h-vh p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl mb-4">Todo App</h1>
//         <form className="flex" onSubmit={(e) => e.preventDefault()}>
//           <input
//             className="w-full px-4 py-2 mr-2 rounded-lg border border-gray-300"
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             placeholder="Enter your todo..."
//           />
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//             type="submit"
//             onClick={handleAddTodo}
//           >
//             Add
//           </button>
//         </form>
//         <ul className="mt-4">
//           {todos.map((todo, index) => (
//             <li
//               key={index}
//               className="flex justify-between items-center py-2 border-b border-gray-300"
//             >
//               {editIndex === index ? (
//                 <>
//                   <input
//                     className="w-full px-2 py-1 mr-2 rounded-lg border border-gray-300"
//                     type="text"
//                     value={editValue}
//                     onChange={(e) => setEditValue(e.target.value)}
//                   />
//                   <button
//                     className="px-3 py-1 bg-green-500 text-white rounded-lg"
//                     onClick={() => handleSaveEdit(index)}
//                   >
//                     Save
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <span>{todo}</span>
//                   <div>
//                     <button
//                       className="px-3 py-1 bg-yellow-500 text-white rounded-lg mr-2"
//                       onClick={() => handleEditTodo(index)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="px-3 py-1 bg-red-500 text-white rounded-lg"
//                       onClick={() => handleDeleteTodo(index)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default TodoApp;
