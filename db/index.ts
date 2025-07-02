import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';

dotenv.config({ path: './.env.local' });

const db = drizzle(process.env.DATABASE_URL!);
export default db;