import { Router } from "express";


import { getAllTask,addNewTask, deletedTask, updatedTask } from "../controllers/taskControllers.ts";

const router = Router();

router.route("/").get(getAllTask).post(addNewTask);
router.route("/:id").delete(deletedTask).patch(updatedTask);

export default router;