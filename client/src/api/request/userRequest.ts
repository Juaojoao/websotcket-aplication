import { User } from "../../models/userModel";
import api from "../authApi";

export interface userRequest {
  message: string;
  status: number;
  success: boolean;
  token: string;
}

const login = async (email: string, password: string) => {
  try {
    const response: userRequest = (
      await api.post("/user/auth/login", { email, password })
    ).data;

    return response;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response.data.message;
  }
};

const createUser = async (data: User) => {
  const { username, email, password } = data;
  try {
    const response: userRequest = (
      await api.post("user/creater-user", {
        username,
        email,
        password,
      })
    ).data;

    return response;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response.data.message;
  }
};

export { login, createUser };
