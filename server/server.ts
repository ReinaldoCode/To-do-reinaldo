import express from "express";
import router from "./routers/taskRouters.ts";
import userRouter from "./routers/userRoutes.ts";
import * as dotenv from "dotenv";

dotenv.config();

const server = express();
const port = process.env.PORT;

server.use(express.json());

server.use("/api/v2/task", router);
server.use("/api/v2/user", userRouter);

server.use("*", (req, res) => {
  res.status(404).json({ msg: "The route is not define " });
});

server.listen(port, ()  => {
  console.log(`Server runing on port ${port}`);
});
