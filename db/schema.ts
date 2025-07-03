

import { uuid, varchar, pgTable, boolean, date, pgEnum } from "drizzle-orm/pg-core";

export const userRole = pgEnum("user_role", ["admin", "user", "guest"]);

export const usersTable = pgTable("users", {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    username: varchar("username", { length: 255 }).notNull().unique(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull(),
    isActive: boolean("is_active").notNull().default(false),
    role: userRole("role").notNull().default("guest"),
    createdAt: date('created_at').notNull().defaultNow(),
    updatedAt: date('updated_at').notNull().$onUpdateFn(() => new Date().toISOString()),
});