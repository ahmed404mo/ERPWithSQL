import {
  createProductService,
  showAllProductService,
  findProductByIdService,
  findProductBySkuService,
  updateProduct as updateProductService, // غيرنا الاسم هنا عشان ميتلخبطش مع اسم الدالة
  deleteProductService
} from "./product.service.js";

export const createProduct = async (req, res) => {
  try {
    const { name, sku, price, stock_quantity, category_id } = req.body;
    
    const result = await createProductService({ name, sku, price, stock_quantity, category_id });
    
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: "Product creation failed", error: error.message });
  }
};

export const showAllProduct = async (req, res) => {
  try {
    const result = await showAllProductService();
    return res.status(200).json(result); 
  } catch (error) {
    return res.status(400).json({ message: "Failed to retrieve products", error: error.message });
  }
};

export const findProductById = async (req, res) => {
  try {
    const { product_id } = req.body;
    const result = await findProductByIdService({ product_id });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: "Find product failed", error: error.message });
  }
};

export const findProductBySku = async (req, res) => {
  try {
    const { sku } = req.body; // بناخد الـ SKU بس
    const result = await findProductBySkuService({ sku });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: "Find product failed", error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { product_id, name, sku, price, stock_quantity, category_id } = req.body;
    
    const result = await updateProductService({
      product_id,
      name,
      sku,
      price,
      stock_quantity,
      category_id,
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: "Update product failed", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { product_id } = req.body;
    const result = await deleteProductService({ product_id });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: "Delete product failed", error: error.message });
  }
};