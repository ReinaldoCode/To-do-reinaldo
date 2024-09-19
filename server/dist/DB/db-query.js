"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserQuery = exports.deleteUserQuery = exports.createNewUser = exports.updateQuery = exports.deleteQuery = exports.addNewQuery = exports.selecAllQuery = void 0;
exports.selecAllQuery = `SELECT * FROM task ORDER BY date ASC`;
exports.addNewQuery = `INSERT INTO task(id, task, task_status, date, userid) VALUES($1, $2, $3, $4, $5) RETURNING *`;
exports.deleteQuery = `DELETE FROM task WHERE id=($1)`;
exports.updateQuery = `UPDATE task SET task_status=($1) WHERE id=($2) RETURNING *`;
exports.createNewUser = `INSERT INTO users(userID, name, email, password) VALUES($1, $2, $3, $4)`;
exports.deleteUserQuery = `DELETE FROM users WHERE userid=($1)`;
exports.findUserQuery = `SELECT * FROM users WHERE email=($1)`;
//# sourceMappingURL=db-query.js.map