import * as userModel from "../../DB/model/auth/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// Login , Register , ForgetPassword

export const registerUser = async (userData) => {
  const { email, password, username } = userData;

  const emailExist = await userModel.checkUserEmail(email);
  if (emailExist) {
    throw new Error("Email Already Exists", { cause: { status: 409 } });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await userModel.createUser({
    username,
    password: hashPassword,
    email,
  });
  const token = jwt.sign(
    { id: result.insertId, role: "User" },
    "NexusSecretKey",
    { expiresIn: "1h" },
  );
  return {
    message: "User Registered Successfully",
    token,
    userId: result.insertId,
  };
};

// export default registerUser
export const loginUserService = async (userData) => {
  const { email, password } = userData;

  const user = await userModel.checkUserEmail(email);

  if (!user) {
    throw new Error("you are not registered");
  }

  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) {
    throw new Error("password incorrect ");
  }

  const token = jwt.sign(
    { id: user.user_id, role: user.role || "User" }, // userId هو insertId في الـ create
    "NexusSecretKey",
    { expiresIn: "1h" },
  );

  return {
    message: "You Have Signed up Successfully  ",
    token,
    user: {
      id: user.user_id,
      username: user.username,
      email: user.email,
      role: user.role || "User",
    },
  };
};

export const updataUserPassword = async (userData) => {
  const { old_password, new_password, email } = userData;

  const user = await userModel.checkUserEmail(email);

  if (!user) {
    throw new Error("user not found");
  }
  const match = await bcrypt.compare(old_password, user.password_hash);
  if (!match) {
    throw new Error("Old password incorrect ");
  }
  const newHashPassword = await bcrypt.hash(new_password, 10);
  const result = await userModel.updateUser({
    email: email,
    password: newHashPassword,
  });

  return { message: "Password updated successfully " };
};
// export const checkPasswordToEdit= async (userData)=>{

// }
