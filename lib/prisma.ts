import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  prisma = global.prisma || new PrismaClient();
}

export default prisma;