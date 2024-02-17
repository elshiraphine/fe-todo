import { RegisterFormData } from "@/app/utils/request/RegisterFormData";
import { RegisterResponse } from "@/app/utils/response/RegisterResponse";
import config from "@/app/config/config";

export const registerUser = async (formData: RegisterFormData): Promise<RegisterResponse> => {
    const response = await fetch(`${config.baseURL}/register`, {
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
