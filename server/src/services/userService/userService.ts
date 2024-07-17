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
      throw new Error("User already exists");
    }
    const hashedPassword = await hash(data.password, 10);

    const newUser = await this.prisma.client.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
        role: { connect: { id: data.role } },
      },
    });

    return newUser;
  }
}
