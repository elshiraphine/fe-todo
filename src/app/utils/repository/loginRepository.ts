import { LoginFormData } from "@/app/utils/request/LoginFormData";
import { LoginResponse } from "@/app/utils/response/LoginResponse";
import config from "@/app/config/config";

export const loginUser = async (formData: LoginFormData): Promise<LoginResponse> => {
    const response = await fetch(`${config.baseURL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    return await response.json();
};