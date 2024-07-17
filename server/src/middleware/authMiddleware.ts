import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel/userModel";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const secretKey = process.env.JWT_SECRET;
  if (!secretKey) {
    return res.status(500).json({ error: "Secret key not configured" });
  }

  jwt.verify(token, secretKey, (err, decoded: any) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    req.user = decoded.user as User;
    next();
  });
};
