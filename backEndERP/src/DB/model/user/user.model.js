import db from "../../connection.js";

// get user date  (not password)
export const findUserById = async (user_id)=>{
  const query = `SELECT user_id, username, email, is_active, created_at FROM users WHERE user_id=? `
  const [rows] = await db.execute(query,[user_id])
  return rows[0]
}


// update date from user
export const updateUser = async ({ user_id, username, email, role }) => {
  const query = `UPDATE users SET username = ?, email = ?, role = ? WHERE user_id = ?`;
  
  const [result] = await db.execute(query, [
    username || null, 
    email || null, 
    role || 'User', 
    user_id
  ]);
  return result;
};
// delete user by active ? true : false
export const deleteUser = async(user_id)=>{
  const query =`UPDATE users SET is_active = FALSE WHERE user_id=?`
  const [result]= await db.execute(query,[user_id])
  return result
}
// get all users
export const getAllUsers = async () => {
  const query =`SELECT user_id, username, email, role, created_at FROM users`
  const [rows] = await db.execute(query);
  return rows;
};