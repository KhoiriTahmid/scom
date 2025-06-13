// lib/data-source.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Comment } from "@/entities/comments";

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Comment],
  synchronize: true, // ❗for development only, auto-create tables
});

export const initDataSource = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  return AppDataSource;
};
