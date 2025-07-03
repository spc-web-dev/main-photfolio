
export type UserType ={
    id: string;
    username: string;
    email: string;
    password: string;
    isActive: boolean;
    role: "admin" | "user" | "guest";
    createdAt: string;
    updatedAt: string;
}

export type UserResponse = {
    message: string;
    data?: UserType | UserType[];
}

