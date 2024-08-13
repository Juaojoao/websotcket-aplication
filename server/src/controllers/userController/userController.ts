import { ErrorRequestHandler, Request, Response } from "express";
import { User } from "../../models/userModel/userModel";
import UserService from "../../services/userService/userService";
import AuthService from "../../services/authService/authService";
import { compare } from "bcrypt";

const userService = new UserService();
const authService = new AuthService();

const createUser = async (req: Request, res: Response) => {
  try {
    const data: User = req.body;
    const newUser = await userService.createUser(data);

    res.status(201).json({
      status: 201,
      success: true,
      message: "Usuário criado com sucesso!",
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const emailAlreadyExist = await userService.findEmail(email);

    if (!emailAlreadyExist) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Usuário não encontrado!",
      });
    }

    const isPasswordMatch = await compare(password, emailAlreadyExist.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Senha incorreta!",
      });
    }

    const token = await authService.generateToken(emailAlreadyExist);

    if (!token) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Erro ao gerar o token!",
      });
    }

    res.status(200).json({
      status: 200,
      success: true,
      message: "Login efetuado com sucesso!",
      token: token,
    });
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
};

export { createUser, login };
