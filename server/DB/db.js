import pg from 'pg'
import * as dotenv from "dotenv";

const {Pool} = pg;
dotenv.config();

export const pool = new Pool({
    user: process.env.USERPG,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORTDB
  });

