import { createUser,deleteUser,login } from "../controllers/usersControllers";
import { Router } from "express";

const userRouter = Router();

userRouter.route("/register").post(createUser);
userRouter.route("/login").post(login);
userRouter.route("/:id").delete(deleteUser);



export default userRouter;