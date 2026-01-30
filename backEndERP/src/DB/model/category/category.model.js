import db from "../../connection.js";

// createCategory , Show all Category , Edit Details Category , Delete Category

// insert values
export const createCategory = async ({ name,description, parent_category_id = null }) => {
  const query = `INSERT INTO categories (name,description, parent_category_id) VALUES (?,?,?)`;
  const [result] = await db.execute(query, [name,description || null, parent_category_id]);
  return result;
};

// show all categories
export const showAllCategory = async () => {
  const query = `SELECT * FROM categories WHERE is_deleted = 0`;
  const [categories] = await db.execute(query);
  return categories;
};

// update categories
export const updateCategory = async ({ name,description, category_id }) => {
  const query = `UPDATE  categories SET name=? , description=? WHERE category_id =? `;
  const [result] = await db.execute(query, [name,description || null, category_id]);
  return result;
};

// delete categories
export const deleteCategory = async ({ category_id }) => {
  const query = `UPDATE categories SET is_deleted = 1 WHERE category_id = ?`;
  const [result] = await db.execute(query, [category_id]);
  return result;
};

// check name is exsit
export const checkNameExist = async ({ name }) => {
  const query = `SELECT * FROM categories WHERE name =? `;
  const [result] = await db.execute(query, [name]);
  return result[0];
};
