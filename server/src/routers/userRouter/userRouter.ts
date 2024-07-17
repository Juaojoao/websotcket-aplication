import { Router } from "express";
import {
  createUser,
  login,
} from "../../controllers/userController/userController";

const userRouter = Router();

userRouter.post("/create-user", createUser);
userRouter.post("/auth/login", login);

export { userRouter };
