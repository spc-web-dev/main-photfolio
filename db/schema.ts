

import { uuid, varchar, pgTable, boolean, timestamp, date } from "drizzle-orm/pg-core";


export const usersTable = pgTable("users", {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    username: varchar("username", { length: 255 }).notNull().unique(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull(),
    isActive: boolean("is_active").notNull().default(false),
    createdAt: date('created_at').notNull().defaultNow(),
    updatedAt: date('updated_at').notNull().$onUpdateFn(() => new Date().toISOString()),
});