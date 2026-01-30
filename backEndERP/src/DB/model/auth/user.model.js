import db from "../../connection.js";

export const createUser = async ({ username, password, email }) => {
  const query = `INSERT INTO users (username, password_hash, email, role) VALUES (?, ?, ?, 'User')`;
  const [result] = await db.execute(query, [username, password, email]);
  return result;
};

export const checkUserEmail = async (email, password) => {
  const query = `SELECT * FROM users WHERE email = ?`;
  const [users] = await db.execute(query, [email]);

  return users[0];
};

export const updateUser = async ({ username, password, email }) => {
  const query = `UPDATE  users set password_hash=? WHERE email = ?`;
  const [result] = await db.execute(query, [password, email]);
  return result;
};
