import * as productModel from "../../DB/model/product/product.model.js";
import { findProductById } from "./product.controller.js";

export const createProductService = async (userData) => {
  const { name, sku, price, stock_quantity, category_id } = userData;

  const categoryExist = await productModel.checkCategory_idExist(category_id);
  if (!categoryExist) {
    throw new Error(
      "Category ID not found (cannot link product to unknown category)",
    );
  }

  const skuExist = await productModel.checkSkuExist(sku);
  if (skuExist) {
    throw new Error("Product SKU already exists");
  }
  const result = await productModel.createProduct({
    name,
    sku,
    price,
    stock_quantity,
    category_id,
  });
  return {
    message: "added model product Successfully",
    productId: result.insertId,
  };
};

export const showAllProductService = async () => {
  const result = await productModel.getAllProducts();
  return {
    message: "Show products successfully",
    result,
  };
};

export const findProductByIdService = async (userData) => {
  const { product_id } = userData;

  const product = await productModel.findProductById(product_id);
  if (!product) {
    throw new Error("Product ID not found");
  }
  return {
    message: "Product found successfully",
    product,
  };
};
export const findProductBySkuService = async (userData) => {
  const { sku } = userData;

  const product = await productModel.findProductBySku(sku);
  if (!product) {
    throw new Error("Product Sku not found");
  }
  return {
    message: "Product found successfully",
    product,
  };
};
export const updateProduct = async (userData) => {
  const { product_id, name, sku, price, stock_quantity, category_id } = userData;
  const product = await productModel.findProductById(product_id);
  if (!product) {
    throw new Error("Product ID not found");
  }

  if (category_id) {
    const categoryExist = await productModel.checkCategory_idExist(category_id); // أو categoryModel حسب مكانها
    if (!categoryExist) {
      throw new Error("Category ID not found");
    }
  }

  if (sku) {
    const duplicateProduct = await productModel.findProductBySku(sku);

    if (
      duplicateProduct &&
      duplicateProduct.product_id !== product.product_id
    ) {
      throw new Error("SKU already exists for another product");
    }
  }

  const updatedData = {
    product_id,
    name: name || product.name,
    sku: sku || product.sku,
    price: price || product.price,
    stock_quantity:
      stock_quantity !== undefined ? stock_quantity : product.stock_quantity, // عشان لو صفر
    category_id: category_id || product.category_id,
  };

  const result = await productModel.updateProduct(updatedData);

  return {
    message: "Product updated successfully",
    result,
  };
};
export const deleteProductService = async ({ product_id }) => {
  const result = await productModel.deleteProduct(product_id);

  if (result.affectedRows === 0) {
    throw new Error(`Product ID ${product_id} not found`);
  }

  return {
    message: "Product deleted successfully (Soft Delete)",
  };
};
