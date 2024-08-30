export  const selecAllQuery = `SELECT * FROM task ORDER BY date ASC`;
export  const addNewQuery = `INSERT INTO task(id, task, task_status, date) VALUES($1, $2, $3, $4) RETURNING *`;
export  const deleteQuery = `DELETE FROM task WHERE id=($1)`;
export  const updateQuery = `UPDATE task SET task_status=($1) WHERE id=($2) RETURNING *`;
