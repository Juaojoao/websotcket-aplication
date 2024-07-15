import { PrismaClient } from "@prisma/client";

export class PrismaService {
  private prisma: PrismaClient;

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
