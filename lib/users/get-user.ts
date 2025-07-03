'use server'

import db from "@/db"
import { usersTable } from "@/db/schema"
import { eq } from "drizzle-orm"
import { UserResponse } from "../types"

export async function getUserByEmail(email: string): Promise<UserResponse> {
    try{
        const res = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.email, email));
        if (!res || res.length === 0) {
            return {
                message: "User not found",
            }
        }
        const user = res[0];
        return {
            message: "User fetched successfully",
            data: user,
        }
    } catch (error) {
        const err = (error instanceof Error) ? error.message : "An error occurred while fetching the user"
        return {
            message: err,
        }
    }
}