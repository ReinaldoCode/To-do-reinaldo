"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedTask = exports.deletedTask = exports.addNewTask = exports.getAllTask = void 0;
const db_1 = require("../../DB/db");
const db_query_1 = require("../../DB/db-query");
const getAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        db_1.pool.query(db_query_1.selecAllQuery, (error, results) => {
            if (error) {
                return res.status(500).json({ error: "Internal Server Error" });
            }
            res.status(200).json(results.rows);
        });
    }
    catch (error) {
        res.status(500).json({ msg: "Error with the server " });
    }
});
exports.getAllTask = getAllTask;
const addNewTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, taskStatus, userid } = req.body;
        if (!task || !taskStatus || !userid) {
            return res.status(400).json({
                msg: "Please provide all required fields: task, taskStatus, userid",
            });
        }
        const taskId = 'asdsasa';
        const date = new Date().toISOString();
        const values = [taskId, task, taskStatus, date, userid];
        db_1.pool.query(db_query_1.addNewQuery, values, (error, results) => {
            if (error) {
                console.error("Database Error: ", error);
                return res.status(500).json({ msg: "Database error occurred" });
            }
            if (results && results.rows && results.rows.length > 0) {
                const newTask = results.rows[0];
                res.status(201).json({
                    id: newTask.id,
                    task: newTask.task,
                    task_status: newTask.task_status,
                    date: newTask.created_at,
                    userid: newTask.userid,
                });
            }
            else {
                res.status(500).json({ msg: "Task creation failed, no data returned" });
            }
        });
    }
    catch (error) {
        console.error("Server Error: ", error);
        res.status(500).json({ msg: "Server error occurred" });
    }
});
exports.addNewTask = addNewTask;
const deletedTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const values = [id];
        db_1.pool.query(db_query_1.deleteQuery, values, (error) => {
            if (error)
                return error;
            res.status(200).json({ msg: "task has been deleted" });
        });
    }
    catch (error) {
        res.status(500).json({ msg: "Error with the server " });
    }
});
exports.deletedTask = deletedTask;
const updatedTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { taskStatus } = req.body;
        const values = [taskStatus, id];
        db_1.pool.query(db_query_1.updateQuery, values, (error, results) => {
            if (error)
                return error;
            res.status(200).json(results.rows[0]);
        });
    }
    catch (error) {
        res.status(500).json({ msg: "Error with the server " });
    }
});
exports.updatedTask = updatedTask;
//# sourceMappingURL=taskControllers.js.map