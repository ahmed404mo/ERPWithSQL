import * as userModel from "../../DB/model/user/user.model.js";

// Login , Register , ForgetPassword

export const getUserService = async (userData) => {
  const { user_id } = userData;

  const user = await userModel.findUserById(user_id);
  if (!user) {
    throw new Error("User not Found");
  }
  return { message: "User Registered Successfully", user: user };
};

export const updateUserService = async (userData) => {
  const { user_id, username, email, role } = userData;

  const userExist = await userModel.findUserById(user_id);
  if (!userExist) throw new Error("User not Found");

  const user = await userModel.updateUser({
    user_id,
    username: username || userExist.username,
    email: email || userExist.email,
    role: role || userExist.role, 
  });

  return { message: "User Updated Successfully", user };
};

export const deleteUserService = async (userData) => {
  const { user_id } = userData;
  const userExist = await userModel.findUserById(user_id);
  if (!userExist) {
    throw new Error("User ID not Found");
  }
  const user = await userModel.deleteUser(user_id);
  return { message: "User Deleted Successfully", user: user };
};

export const getAllUsersService = async () => {
  const users = await userModel.getAllUsers();

  return {
    message: "Users retrieved successfully",
    result: users,
  };
};
