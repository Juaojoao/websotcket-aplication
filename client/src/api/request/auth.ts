import api from "../authApi";

interface login {
  message: string;
  status: number;
  success: boolean;
  token: string;
}

const login = async (email: string, password: string) => {
  try {
    const response: login = (
      await api.post("/user/auth/login", { email, password })
    ).data;
    return response;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response.data.message;
  }
};

export { login };
