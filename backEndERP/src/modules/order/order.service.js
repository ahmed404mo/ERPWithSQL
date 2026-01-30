import * as orderModel from "../../DB/model/order/order.model.js";
import db from "../../DB/connection.js"; 
import * as productModel from "../../DB/model/product/product.model.js";
// Login , Register , ForgetPassword
export const createOrderService = async ({ user_id, product_id, quantity }) => {
  const product = await productModel.findProductById(product_id);
  if (!product) throw new Error("Product not found");

  const unit_price = product.price || 0; 
  const total_amount = unit_price * (quantity || 1);
  const status = 'Pending'; 

  const orderResult = await orderModel.createOrder({
    user_id: user_id || null, // تجنب الـ undefined
    total_amount: total_amount,
    status: status
  });

  const order_id = orderResult.insertId;

  await orderModel.createOrderDetails({
    order_id,
    product_id,
    quantity: quantity || 1,
    unit_price
  });

  return { message: "Order placed successfully", order_id };
};

export const createOrderItemService = async (userData) => {
  const { order_id, product_id, quantity, unit_price } = userData;

  const [checkOrderId] = await db.execute(
    "SELECT order_id FROM orders WHERE order_id = ?",
    [order_id],
  );
  if (checkOrderId.length === 0) {
    throw new Error(`Order ID ${order_id} not found in database`);
  }
  const [checkProductId] = await db.execute(
    "SELECT product_id FROM products WHERE product_id = ?",
    [product_id],
  );
  if (checkProductId.length === 0) {
    throw new Error(`Product ID ${product_id} not found in database`);
  }
  const result = await orderModel.createOrderDetails({
    order_id,
    product_id,
    quantity,
    unit_price,
  });
  return {
    message: "Create Order Items Successfully",
    orderId: result.insertId,
  };
};

export const getOrdersService = async (userData) => {
  const { user_id, role } = userData; 
  let orders;

  if (role === 'Admin') {
    orders = await orderModel.getAllOrders(); 
  } else {
    orders = await orderModel.getUserOrders(user_id);
  }
  
  if (!orders || orders.length === 0) {
    return { message: "No orders found", result: [] };
  }

  return {
    message: "Get all Orders Successfully",
    count: orders.length,
    result: orders,
  };
};