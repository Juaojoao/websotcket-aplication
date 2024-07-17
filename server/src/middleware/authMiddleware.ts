import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (res: Response, req: Request, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token not Provided" });
  }

  jwt.verify(token, process.env.SECRET_KEY as string, (err, decoded: any) => {
    if (err) {
      return res.status(401).json({ error: "Inválid token" });
    }

    req.user = decoded.user;
    next();
  });
};
