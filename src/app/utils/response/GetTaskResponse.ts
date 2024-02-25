import { Task } from "@/app/interfaces/Task";

export interface GetTaskResponse {
    code: number;
    status: string;
    data: {
        tasks: Task[];
    }
    links: {
        self: string;
    }
    meta: {
        date_accessed: string;
        version: string;
    }
}