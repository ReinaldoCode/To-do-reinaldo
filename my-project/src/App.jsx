import { NavBar } from "./Components/Nav";
import { Board } from "./Components/board";
import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  const toggleTodos = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, clmpleted: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <NavBar />
      <Board addTodo={addTodo} todos={todos} removeTodo={removeTodo} toggleTodos={toggleTodos} />
    </div>
  );
};
export default App;
