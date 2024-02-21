import {User} from "@/app/interfaces/User";

export interface LoginResponse {
    code: number;
    status: string;
    data: {
        message: string;
        token: string;
        user: User;
    }
    links: {
        self: string;
    }
    meta: {
        date_accessed: string;
        version: string;
    }
}