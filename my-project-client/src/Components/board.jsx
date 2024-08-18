import React, { useState } from "react";
import { Todolist } from "./todo-list";

export const Board = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  const toggleTodo = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

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
        {todos.map((todo, index) => 
        <Todolist key={index}
        index={index}
        todo={todo}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}/>
        )}
 
         </ul>
          </div>
      </div>
    </div>
  );
};
