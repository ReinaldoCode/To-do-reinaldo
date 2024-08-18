import React, { useState } from "react";

export const Board = ({ addTodo, todos, toggleTodo, removeTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({ text: input, completed: false });
      setInput("");
    }
  };

  return (
    <div className="flex pt-2 rounded-md h-full justify-center">
      <div className="w-5/6 rounded-md justify-center bg-gray-700 p-5">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <input
              className=" inline-block border-4 border-blue-400 bg-white text-center w-full h-14 rounded-md"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="To-do Note"
              id="noteInput"
            />
          </div>
          <div className="pt-5 flex justify-center">
            <button
              type="submit"
              className="transition ease-in-out delay-100 bg-blue-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300 rounded-md w-20"
              id="AddButton"
            >
              Add
            </button>
          </div>
        </form>

        <div className="pt-5 flex">
          <ul className="w-full">
            {todos.map((todo, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-2 mb-2 rounded-md ${
                  todo.completed ? "bg-green-500" : "bg-blue-400 flex-wrap" 
                }`}
              >
                <span  className=" text-black">{todo.text}</span>
                <div className="flex justify-between"> 
                  <button
                  onClick={() => toggleTodo(index)}
                  className={`${todo.completed ? "bg-green-800 hover:bg-green-900" : "mx-2 bg-amber-500 hover:bg-amber-600" } text-black p-1 rounded-md`}
                >
                  {todo.completed ? "Done" : "Pending"}
                </button>
                <button
                  onClick={() => removeTodo(index)}
                  className="mx-2 bg-red-500 text-black p-1 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
                </div> 
              </li>
              
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
