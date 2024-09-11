import React, { useEffect, useState } from "react";
import { Todolist } from "./todo-list";
import {jwtDecode} from "jwt-decode"
import axios from "axios";


export const Board = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v2/task")
      .then((res) => {
        const tasks = res.data;
        const useridToken = localStorage.getItem("jwtToken");
        const userid =jwtDecode(useridToken).userid;
        const filteredTasks = tasks
        .filter((task) => task.userid === userid) // Only tasks that match the current user's ID
        .map((task) => ({
          text: task.task,
          completed: task.task_status,
          id: task.id,
          userid: task.userid,
        }));

      setTodos(filteredTasks);
      })
      .catch((err) => console.error("Error with the task: ", err));
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = async (todoId) => {
    try {
      await axios.delete(`/api/v2/task/${todoId}`);

      const newTodos = todos.filter((todo) => todo.id !== todoId);

      setTodos(newTodos);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const toggleTodo = async (index) => {
    try {
      const taskToUpdate = todos.find((todo) => todo.id === index);
      const currentStatus =
        taskToUpdate.completed === "complete" ? "pending" : "complete";

      const response = await axios.patch(`/api/v2/task/${taskToUpdate.id}`, {
        taskStatus: currentStatus,
      });

      const updatedTask = response.data;
    
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === updatedTask.id
            ? {
                text: updatedTask.task,
                completed: updatedTask.task_status,
                id: updatedTask.id,
                date: updatedTask.date,
              }
            : todo
        )
      );
    } catch (error) {
      console.error("Failed to toggle todo:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      try {
        const useridToken = localStorage.getItem("jwtToken");
        const userid =jwtDecode(useridToken).userid;
        console.log(userid);
        const response = await axios.post("/api/v2/task", {
          task: input,
          taskStatus: "pending",
          userid: userid,
        });
        console.log(response);
        const newTask = {
          id: response.data.id,
          text: response.data.task,
          task_status: response.data.task_status,
          date: response.data.date,
          userid: response.data.userid,
        };
        // console.log(newTask);
        addTodo(newTask);
        setInput("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
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
              <Todolist
                key={todo.id}
               
                todo={todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
