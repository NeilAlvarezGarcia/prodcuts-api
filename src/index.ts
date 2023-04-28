import "reflect-metadata";
import { config } from "dotenv";
if (process.env.NODE_ENV !== "production") {
  config();
}

import { AppDataSource } from "./config/typeorm";
import { startServer } from "./app";

async function main() {
  try {
    await AppDataSource.initialize();
    await startServer();
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

main();
