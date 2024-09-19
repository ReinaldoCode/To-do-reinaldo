"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskControllers_1 = require("../controllers/taskControllers");
const router = (0, express_1.Router)();
router.route("/").get(taskControllers_1.getAllTask).post(taskControllers_1.addNewTask);
router.route("/:id").delete(taskControllers_1.deletedTask).patch(taskControllers_1.updatedTask);
exports.default = router;
//# sourceMappingURL=taskRouters.js.map