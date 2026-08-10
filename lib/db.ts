import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaMssql } from "@prisma/adapter-mssql";

const adapter = new PrismaMssql(process.env.DATABASE_URL!);

const prisma = new PrismaClient({ adapter });

export default prisma;
