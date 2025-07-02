import { migrate } from 'drizzle-orm/postgres-js/migrator';
import  db  from './index'; // Your Drizzle DB instance

async function main() {
  try {
    console.log('Starting database migrations...');
    await migrate(db, { migrationsFolder: './drizzle' }); // Matches `out` in drizzle.config.ts
    console.log('Migrations complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error during migrations:', error);
    process.exit(1);
  }
}

main();