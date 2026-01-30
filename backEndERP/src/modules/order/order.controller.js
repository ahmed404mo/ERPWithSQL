import {
  createOrderItemService,
  createOrderService,
  getOrdersService,
} from "./order.service.js";
export const createUserOrder = async (req, res) => {
  try {
    // استخرج الـ id من التوكن (req.user) وليس من الـ body
    const user_id = req.user.id; 
    const { product_id, quantity } = req.body; 

    const result = await createOrderService({ 
      user_id, 
      product_id, 
      quantity: quantity || 1 
    });

    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: "Create Order Failed", error: error.message });
  }
};

export const createUserOrderItems = async (req, res) => {
  try {
    const { order_id, product_id, quantity, unit_price } = req.body;
    const resualt = await createOrderItemService({
      order_id,
      product_id,
      quantity,
      unit_price,
    });
    return res.status(201).json(resualt);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Create Oreder Details Failed", error: error.message });
  }
};
export const getAllUserOrders = async (req, res) => {
  try {
    const result = await getOrdersService({ 
      user_id: req.user.id, 
      role: req.user.role 
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: "Get Orders Failed", error: error.message });
  }
};