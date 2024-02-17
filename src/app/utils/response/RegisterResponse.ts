import {User} from "@/app/interfaces/User";

export interface RegisterResponse {
    code: number;
    status: string;
    data: {
        message: string;
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