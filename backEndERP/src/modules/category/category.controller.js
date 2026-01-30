import { deleteCategory } from "../../DB/model/category/category.model.js";
import {
  CreateCategory,
  deleteCategoryService,
  showCategory,
  updateCategoryService,
} from "./category.service.js";

export const addNewCategory = async (req, res) => {
  try {
    const { name,description, parent_category_id } = req.body;
    const resualt = await CreateCategory({ name,description, parent_category_id });
    return res.status(201).json(resualt);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "added Category Failed", error: error.message });
  }
};

export const showAllCategory = async (req, res) => {
  try {
    const resualt = await showCategory();
    return res.status(200).json(resualt);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "show category Failed", error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { name,description, category_id } = req.body;
    const result = await updateCategoryService({ name,description, category_id });

    // if (result.affectedRows === 0) {
    //   throw new Error("Category ID not found")
    // }

    return res.status(200).json(result);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "updated category Failed", error: error.message });
  }
};

export const DeleteCategory = async (req, res) => {
  try {
    const { category_id } = req.body;
    const result = await deleteCategoryService({ category_id });

    return res.status(200).json(result);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "deleted category Failed", error: error.message });
  }
};
