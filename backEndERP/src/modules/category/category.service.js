import * as categoryDB from "../../DB/model/category/category.model.js";

export const CreateCategory = async (userData) => {
  const { name, parent_category_id,description } = userData;

  const checkName = await categoryDB.checkNameExist({ name });
  if (checkName) {
    throw new Error("name Category Already Exists");
  }
  const result = await categoryDB.createCategory({
    name,
    description,
    parent_category_id,
  });
  return { message: "Successfully add new Category", userId: result.insertId };
};

export const showCategory = async () => {
  const result = await categoryDB.showAllCategory();
  return {
    message: "Show all category is successfully",
    result,
  };
};

export const updateCategoryService = async ({ name, category_id ,description}) => {
  const checkName = await categoryDB.checkNameExist({ name });
  if (checkName &&checkName.category_id != category_id ) {
    throw new Error("name Category Already Exists");
  }
  const result = await categoryDB.updateCategory({ name,description,  category_id });
  if (result.affectedRows == 0) {
    throw new Error(`Category ID ${category_id} not found`);
  }
  return {
    message: "Updated  is successfully",
  };
};

export const deleteCategoryService = async ({ category_id }) => {
  const result = await categoryDB.deleteCategory({ category_id });
  if (result.affectedRows === 0) {
    throw new Error(`Category ID ${category_id} not found`);
  }
  return {
    message: "deleted  is successfully",
  };
};
