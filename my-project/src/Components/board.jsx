import React, { useState } from "react";

export const Board = ({ addTodo, todos, removeTodo,toggleTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({ text: input, completed: false });
      setInput("");
    }
  };

  return (
    <div className="flex pt-2 rounded-md h-screen justify-center">
      <div className="w-5/6 rounded-md justify-center bg-gray-700 p-5">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <input
              className="border-4 border-blue-400 bg-white text-center w-96 h-14 rounded-md"
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
              className="transition ease-in-out delay-150 bg-blue-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300 rounded-md w-20"
              id="AddButton"
            >
              Add
            </button>
          </div>
        </form>

        <div className="pt-5 flex justify-center">
          <ul className="w-full">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 mb-2 bg-blue-400 rounded-md"
              >
                <span className="text-white">{todo.text}</span>
                <button
                  onClick={() => removeTodo(index)}
                  className="bg-amber-500 text-white p-1 rounded-md hover:bg-amber-600"
                >
                  Pending
                </button>
                <button
                  onClick={() => removeTodo(index)}
                  className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};