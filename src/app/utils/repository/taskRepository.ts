import { GetTaskResponse } from "@/app/utils/response/GetTaskResponse";
import config from "@/app/config/config";

export const getTasks = async (token: string): Promise<GetTaskResponse> => {
    const response = await fetch(`${config.baseURL}/tasks`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({})
    });

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    return await response.json();
}