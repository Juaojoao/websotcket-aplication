// @types/express.d.ts
import { Request } from "express";
import { User } from "../models/userModel/userModel";

declare module "express-serve-static-core" {
  interface Request {
    user?: User;
  }
}
