import { pool } from "../../DB/db";
import {
  selecAllQuery,
  addNewQuery,
  deleteQuery,
  updateQuery,
} from "../../DB/db-query";
import { Response, Request } from "express";

export const getAllTask = async (req: Request, res: Response) => {
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

export const addNewTask = async (req:Request, res: Response) => {
  try {
    const { task, taskStatus, userid } = req.body;
    if (!task || !taskStatus || !userid) {
      return res.status(400).json({
        msg: "Please provide all required fields: task, taskStatus, userid",
      });
    }
    const taskId = 'asdsasa';
    const date = new Date().toISOString();
    const values = [taskId, task, taskStatus, date, userid];
    pool.query(addNewQuery, values, (error, results) => {
      if (error) {
        console.error("Database Error: ", error);
        return res.status(500).json({ msg: "Database error occurred" });
      }
      if (results && results.rows && results.rows.length > 0) {
        const newTask = results.rows[0];
        res.status(201).json({
          id: newTask.id,
          task: newTask.task,
          task_status: newTask.task_status,
          date: newTask.created_at,
          userid: newTask.userid,
        });
      } else {
        res.status(500).json({ msg: "Task creation failed, no data returned" });
      }
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ msg: "Server error occurred" });
  }
};

export const deletedTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const values = [id];
    pool.query(deleteQuery, values, (error) => {
      if (error) return error;
      res.status(200).json({ msg: "task has been deleted" });
    });
  } catch (error) {
    res.status(500).json({ msg: "Error with the server " });
  }
};

export const updatedTask = async (req: Request, res: Response) => {
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
