import {
  deleteUserService,
  getAllUsersService,
  getUserService,
  updateUserService,
} from "./user.service.js";

export const getUserData = async (req, res) => {
  try {
    const user_id = req.user.id;
    const resualt = await getUserService({ user_id });
    return res.status(200).json(resualt);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Get User Data Failed", error: error.message });
  }
};

export const updateUserData = async (req, res) => {
  try {
    const user_id = req.user.id;

    const { username, email, role } = req.body;

    const result = await updateUserService({ user_id, username, email, role });
    return res.status(200).json(result);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Update Failed", error: error.message });
  }
};

export const deleteUserData = async (req, res) => {
  try {
    const user_id = req.user.id;
    if (!user_id) {
      return res.status(400).json({ message: "user_id is required" });
    }
    const resualt = await deleteUserService({ user_id });
    return res.status(200).json(resualt);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Delete user Failed", error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const result = await getAllUsersService();
    return res.status(200).json(result);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to fetch users", error: error.message });
  }
};
