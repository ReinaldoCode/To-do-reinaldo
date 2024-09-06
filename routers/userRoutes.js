import { createUser,deleteUser,login } from "../controllers/usersControllers.js";
import { Router } from "express";

const userRouter = Router();

userRouter.route("/").post(createUser).get(login);
userRouter.route("/:id").delete(deleteUser);



export default userRouter;