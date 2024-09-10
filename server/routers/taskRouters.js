import { Router } from "express";
// import {
//   getAllTask,
//   addNewTask,
//   deleteTask,
//   updateTask,
// } from "../controllers/taskControllers.js";

// const router = Router();

// router.route("/").get(getAllTask).post(addNewTask);
// router.route("/:id").delete(deleteTask).patch(updateTask);

// export default router;

import { getAllTask,addNewTask, deletedTask, updatedTask } from "../controllers/taskControllers.js";

const router = Router();

router.route("/").get(getAllTask).post(addNewTask);
router.route("/:id").delete(deletedTask).patch(updatedTask);

export default router;