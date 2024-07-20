import { User } from "@prisma/client";
import { PrismaService } from "../../config/database";
import Jwt from "jsonwebtoken";

export default class AuthService {
  private readonly prisma: PrismaService;
  private readonly jwt;

  constructor() {
    this.prisma = new PrismaService();
    this.jwt = Jwt;
  }

  async generateToken(user: User) {
    const payload = {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.roleId,
      },
    };

    return this.jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: process.env.EXPIRESIN,
    });
  }
}
