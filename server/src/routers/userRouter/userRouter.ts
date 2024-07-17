import { Router } from "express";
import { createUser } from "../../controllers/userController/userController";

const userRouter = Router();

userRouter.post("/create-user", createUser);

export { userRouter };
