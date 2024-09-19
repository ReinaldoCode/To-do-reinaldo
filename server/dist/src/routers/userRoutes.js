"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersControllers_1 = require("../controllers/usersControllers");
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.route("/register").post(usersControllers_1.createUser);
userRouter.route("/login").post(usersControllers_1.login);
userRouter.route("/:id").delete(usersControllers_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map