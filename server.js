import express from "express";

const server = express();
const port = 3000;

server.use(express.json());

let tasks = [
  {
    id: "1",
    task: "Toso",
    taskStatus: "done",
  },
  {
    id: "2",
    task: "Todo",
    taskStatus: "pending",
  },
  {
    id: "3",
    task: "Todo",
    taskStatus: "pending",
  },
];

//create task , update task , delete task

server.get("/", (req, res) => {
  res.send("Hello word");
});

server.get("/api/v1/task", (req, res) => {
  res.status(200).json({ tasks });
});

server.post("/api/v1/newTask", (req, res) => {
  const { id, task, taskStatus } = req.body;
  if (!id || !task || !taskStatus) {
    return res.status(400).json({ msg: "More info require" });
  }
  const newTask = { id, task, taskStatus };
  tasks.push(newTask);
  return res.status(201).json(tasks);
});

server.delete("/api/v1/deleteTask/:id", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ msg: "task was not found" });
  }
   
  tasks = tasks.filter((task) => task.id !== id);

  res.status(200).json({ msg: "Task deleted",tasks });
});

server.patch('/api/v1/updateTask/:id',(req, res) =>{
const {taskStatus} = req.body;

if(!taskStatus){
  res.status(400).json({msg:"Please update the status of the task"})
}
const {id} = req.params;
const task = tasks.find((task) => task.id === id);
if(!task){
  res.status(404).json({msg:"Task was not found"});
}
task.taskStatus = taskStatus;
res.status(200).json({msg:'Task has been updates', task})

})

server.use('*',(req, res)=>{
  res.status(404).json({msg: 'The route is not define '})
})
server.listen(port, (req, res) => {
  console.log(`Server runing on port ${port}`);
});
