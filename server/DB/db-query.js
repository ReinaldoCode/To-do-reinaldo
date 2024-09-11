export const selecAllQuery = `SELECT * FROM task ORDER BY date ASC`;
export const addNewQuery = `INSERT INTO task(id, task, task_status, date, userid) VALUES($1, $2, $3, $4, $5) RETURNING *`;
export const deleteQuery = `DELETE FROM task WHERE id=($1)`;
export const updateQuery = `UPDATE task SET task_status=($1) WHERE id=($2) RETURNING *`;
export const createNewUser = `INSERT INTO users(userID, name, email, password) VALUES($1, $2, $3, $4)`;
export const deleteUserQuery = `DELETE FROM users WHERE userid=($1)`;
export const findUserQuery = `SELECT * FROM users WHERE email=($1)`;
