// import { User } from "@prisma/client";

export class UserEntity {
    id: number;
    email: string;
    name: string;
    admin: boolean;
    createAt: Date;
}
