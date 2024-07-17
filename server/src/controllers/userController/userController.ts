import { ErrorRequestHandler, Request, Response } from "express";
import { User } from "../../models/userModel/userModel";
import UserService from "../../services/userService/userService";

const userService = new UserService();

const createUser = async (req: Request, res: Response) => {
  try {
    const data: User = req.body;
    const newUser = await userService.createUser(data);

    res.status(201).json({
      user: {
        ...newUser,
        password: undefined,
        roleId: undefined,
        createdAt: undefined,
        updatedAt: undefined,
      },
    });
  } catch (error: any) {
    console.log(error);

    res.status(400).json({ error: error.message });
  }
};

export { createUser };
