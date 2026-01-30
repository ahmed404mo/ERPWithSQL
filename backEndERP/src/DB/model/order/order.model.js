import db from "../../connection.js";

// create order // create order items details // show all orders //

export const createOrder = async ({ user_id, total_amount, status }) => {
  const query = `INSERT INTO orders (user_id, order_date, status, total_amount) VALUES (?, NOW(), ?, ?)`;
  const [result] = await db.execute(query, [user_id, status, total_amount]);
  return result;
};

export const createOrderDetails = async ({ order_id, product_id, quantity, unit_price }) => {
  const query = `INSERT INTO order_details (order_id, product_id, quantity, unit_price) VALUES (?, ?, ?, ?)`;
  const [result] = await db.execute(query, [order_id, product_id, quantity, unit_price]);
  return result;
};

export const getUserOrders = async (user_id) => {
  const query = `SELECT * FROM orders WHERE user_id=? ORDER BY order_date DESC `;
  const [orders] = await db.execute(query, [user_id]);
  return orders;
};

export const getAllOrders = async () => {
  const query = `SELECT * FROM orders ORDER BY order_date DESC`;
  const [rows] = await db.execute(query);
  return rows;
};
