import {
  registerUser,
  loginUserService,
  updataUserPassword,
} from "./auth.service.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = await registerUser({ username, password, email });
    return res.status(201).json(result);
  } catch (error) {
    console.error("Error during registration:", error);
    return res
      .status(400)
      .json({ message: "Registration Failed", error: error.message });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUserService({ email, password });
    // console.log(email);
    return res.status(200).json(result);
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Login Failed", error: error.message });
  }
};
export const updataPassword = async (req, res) => {
  try {
    const { old_password, new_password, email } = req.body;
    const result = await updataUserPassword({
      email,
      old_password,
      new_password,
    });
    // console.log(email);
    return res.status(200).json(result);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to update password ", error: error.message });
  }
};
