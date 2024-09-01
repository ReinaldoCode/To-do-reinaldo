import express from "express";
import router from "./routers/taskRouters.js";
import * as dotenv from 'dotenv';
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
dotenv.config();

const server = express();
const port = process.env.PORT;

// server.use(bodyParser.json());
server.use(express.json());
// server.use("/api/v1/task",router);

//create task , update task , delete task

// server.get("/api/v1/task", (req, res) => {
//   res.status(200).json({ tasks });
// });

// server.post("/api/v1/task", (req, res) => {
//   const { id, task, taskStatus } = req.body;
//   if (!id || !task || !taskStatus) {
//     return res.status(400).json({ msg: "More info require" });
//   }
//   const newTask = { id, task, taskStatus };
//   tasks.push(newTask);
//   return res.status(201).json(tasks);
// });

// server.delete("/api/v1/task/:id", (req, res) => {
//   const { id } = req.params;
//   const task = tasks.find((task) => task.id === id);

//   if (!task) {
//     return res.status(404).json({ msg: "task was not found" });
//   }
   
//   tasks = tasks.filter((task) => task.id !== id);

//   res.status(200).json({ msg: "Task deleted",tasks });
// });

// server.patch('/api/v1/task/:id',(req, res) =>{
// const {taskStatus} = req.body;

// if(!taskStatus){
//   res.status(400).json({msg:"Please update the status of the task"})
// }
// const {id} = req.params;
// const task = tasks.find((task) => task.id === id);
// if(!task){
//   res.status(404).json({msg:"Task was not found"});
// }
// task.taskStatus = taskStatus;
// res.status(200).json({msg:'Task has been updates', task})

// })

// server.get("/", (req, res) => {
//   res.send("Hello word");
// });

// server.post("/api/v2/task");


server.use("/api/v2/task",router);

server.use('*',(req, res)=>{
  res.status(404).json({msg: 'The route is not define '})
});


server.listen(port, (req, res) => {
  console.log(`Server runing on port ${port}`);
});


