import db from "../../connection.js";

export const createProduct = async ({
  name,
  sku,
  price,
  stock_quantity,
  category_id,
}) => {
  const query = `INSERT INTO products (name, sku, price, stock_quantity, category_id) VALUES (?,?,?,?,?)`;
  const [result] = await db.execute(query, [
    name,
    sku,
    price,
    stock_quantity,
    category_id,
  ]);
  return result;
};
// add products
export const getAllProducts = async () => {
  const query = `SELECT * From products WHERE is_deleted = FALSE`;
  const [products] = await db.execute(query);
  return products;
};

// find product
export const findProductById = async (product_id) => {
  const query = `SELECT * FROM products WHERE product_id=? AND is_deleted = FALSE`;
  const [result] = await db.execute(query, [product_id]);
  return result[0];
};

export const findProductBySku = async (sku) => {
  const query = `SELECT * FROM products WHERE sku =?`;
  const [result] = await db.execute(query, [sku]);
  return result[0];
};

export const updateProduct = async ({
  product_id,
  name,
  price,
  stock_quantity,
  category_id,
}) => {
  const query = `UPDATE products SET  name=?, price=?, stock_quantity=?, category_id=? WHERE product_id = ?`;
  const [result] = await db.execute(query, [
    name,
    price,
    stock_quantity,
    category_id,
    product_id,
  ]);
  return result;
};

export const deleteProduct = async (product_id) => {
  const query = `UPDATE products SET is_deleted =TRUE WHERE product_id =? `;
  const [result] = await db.execute(query, [product_id]);
  return result;
};

export const checkCategory_idExist = async (category_id) => {
  const query = `SELECT * FROM categories WHERE category_id=?`;
  const [result] = await db.execute(query, [category_id]);
  return result[0];
};

export const checkSkuExist = async (sku) => {
  const query = `SELECT * FROM products WHERE sku=?`;
  const [result] = await db.execute(query, [sku]);
  return result[0];
};
