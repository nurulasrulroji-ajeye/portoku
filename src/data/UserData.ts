import { User } from "../model/User";

const userData: User[] = [
    {
        id: 1,
        email: "cti@example.id",
        password: "12345678"
    },
    {
        id: 2,
        email: "randomUser@example.id",
        password: "password"
    }
]

export const getUserByEmail = (email: string): User | undefined => {
    return userData.find((user) => user.email === email);
}
export const getUserById = (id: number): User | undefined => {
    return userData.find((user) => user.id === id);
}