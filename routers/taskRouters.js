import { Router } from "express";
import {
  getAllTask,
  addNewTask,
  deleteTask,
  updateTask,
} from "../controllers/taskControllers.js";

const router = Router();

router.route("/").get(getAllTask).post(addNewTask);
router.route("/:id").delete(deleteTask).patch(updateTask);

export default router;