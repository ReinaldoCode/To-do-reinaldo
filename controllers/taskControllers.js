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

  export const getAllTask = async (req,res) => {
    res.status(200).json({ tasks });
  }

  export const addNewTask = async (req, res) => {
    const { id, task, taskStatus } = req.body;
    if (!id || !task || !taskStatus) {
      return res.status(400).json({ msg: "More info require" });
    }
    const newTask = { id, task, taskStatus };
    tasks.push(newTask);
    return res.status(201).json(tasks);
  }

  export const deleteTask = async (req, res) => {
    const { id } = req.params;
    const task = tasks.find((task) => task.id === id);
  
    if (!task) {
      return res.status(404).json({ msg: "task was not found" });
    }
     
    tasks = tasks.filter((task) => task.id !== id);
  
    res.status(200).json({ msg: "Task deleted",tasks });
  }

  export const updateTask = async (req, res) =>{
    const {taskStatus} = req.body;
    
    if(!taskStatus){
     return res.status(400).json({msg:"Please update the status of the task"})
    }
    const {id} = req.params;
    const task = tasks.find((task) => task.id === id);
    if(!task){
     return res.status(404).json({msg:"Task was not found"});
    }
    task.taskStatus = taskStatus;
    res.status(200).json({msg:'Task has been updates', task})
    
    }