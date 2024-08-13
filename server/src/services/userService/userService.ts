import { PrismaService } from "../../config/database";
import { User } from "../../models/userModel/userModel";
import { hash } from "bcrypt";

export default class UserService {
  private prisma: PrismaService;

  constructor() {
    this.prisma = new PrismaService();
  }

  async createUser(data: User) {
    const userAlreadyExists = await this.prisma.client.user.findUnique({
      where: { email: data.email },
    });

    if (userAlreadyExists) {
      throw new Error("Usuário já existente");
    }
    const hashedPassword = await hash(data.password, 10);

    const newUser = await this.prisma.client.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
        role: { connect: { id: 1 } },
      },
    });

    return {
      ...newUser,
      password: undefined,
      roleId: undefined,
      createdAt: undefined,
      updatedAt: undefined,
    };
  }

  async findEmail(email: string) {
    const emailAlreadyExist = this.prisma.client.user.findUnique({
      where: { email },
    });

    if (!emailAlreadyExist) {
      throw new Error("Este Email não existe!");
    }

    return {
      ...emailAlreadyExist,
      roleId: undefined,
      createdAt: undefined,
      updatedAt: undefined,
    };
  }
}
