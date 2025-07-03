'use server'
import db from "@/db";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export const updateIsActiveUserByEmail = async (
  email: string,
  updates: Partial<{
    username: string;
    isActive: boolean;
    role: "admin" | "user" | "guest";
  }>
) => {
  try {
    await db.update(usersTable).set(updates).where(eq(usersTable.email, email));

    return {
      message: "User updated successfully",
    };
  } catch (error) {
    const err =
      error instanceof Error
        ? error.message
        : "An error occurred while updating the user";
    return {
      message: err,
    };
  }
};
