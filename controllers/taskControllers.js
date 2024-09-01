// import Task from "../models/taskModel.js";
// // let tasks = [
// //     {
// //       id: "1",
// //       task: "Toso",
// //       taskStatus: "done",
// //     },
// //     {
// //       id: "2",
// //       task: "Todo",
// //       taskStatus: "pending",
// //     },
// //     {
// //       id: "3",
// //       task: "Todo",
// //       taskStatus: "pending",
// //     },
// //   ];

// export const getAllTask = async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.status(200).json({ tasks });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "Error with the server " });
//   }
// };

// export const addNewTask = async (req, res) => {
//   try {
//     const { task, taskStatus } = req.body;
//     if (!task) {
//       return res.status(400).json({ msg: "Enter the task and the taskStatus" });
//     }
//     const newTask = await Task.create({ task, taskStatus});
//     return res.status(201).json(newTask);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "Error with the server" });

//   }
// };

// export const deleteTask = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedTask = await Task.findByIdAndDelete(id);
//     if (!deletedTask) {
//       return res.status(404).json({ msg: "task was not found" });
//     }
//     res.status(200).json({ msg: "Task deleted", task: deletedTask });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json("Error with the server");
//   }
// };

// export const updateTask = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { taskStatus } = req.body;

//     if (taskStatus === undefined || taskStatus === null) {
//       return res.status(400).json({ msg: "Please enter the task status" });
//     }

//     const updatedTask = await Task.findByIdAndUpdate(
//       id,
//       { taskStatus },
//       { new: true }
//     );

//     if (!updatedTask) {
//       return res.status(404).json({ msg: "No task found with the given ID" });
//     }

//     res.status(200).json({ msg: "Task updated successfully", task: updatedTask });
//   } catch (error) {
//     console.error("Error while updating task:", error);
//     res.status(500).json({ msg: "Server error. Please try again later." });
//   }
// };

import { pool } from "../DB/db.js";
import {
  selecAllQuery,
  addNewQuery,
  deleteQuery,
  updateQuery,
} from "../DB/db-query.js";
import { nanoid } from "nanoid";

export const getAllTask = async (req, res) => {
  try {
    pool.query(selecAllQuery, (error, results) => {
      if (error) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.status(200).json(results.rows);
    });
  } catch (error) {
    res.status(500).json({ msg: "Error with the server " });
  }
};

export const addNewTask = async (req, res) => {
  try {
    const { task, taskStatus } = req.body;
    if (!task) {
      return res.status(400).json({ msg: "Please enter the task" });
    }
    const nano = nanoid();
    const date = new Date();
    const dateString = date.toISOString();
    const values = [nano, task, taskStatus, dateString];
    pool.query(addNewQuery, values, (error, results) => {
      if (error) {
       return res.status(500).json({ msg: "Database error occurred" });
      }
      res.status(201).json(results.rows[0]);
    });
  } catch (error) {
      res.status(500).json({ msg: "Server error occurred" });
  }
};

export const deletedTask = async (req, res) => {
  try {
    const { id } = req.params;
    const values = [id];
    pool.query(deleteQuery, values, (error) => {
      if (error) return error;
      res.status(200).json({ msg: "Task has been deleted" });
    });
  } catch (error) {
    res.status(500).json({ msg: "Error with the server " });
  }
};

export const updatedTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { taskStatus } = req.body;
    const values = [taskStatus, id];
    pool.query(updateQuery, values, (error, results) => {
      if (error) return error;
      res.status(200).json(results.rows[0]);
    });
  } catch (error) {
    res.status(500).json({ msg: "Error with the server " });
  }
};
