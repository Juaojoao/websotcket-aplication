import { Router } from "express";
import { helloUser } from "../controllers/userController";

const router = Router();

router.get("/", helloUser);

export default router;
