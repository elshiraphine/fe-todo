import React, { useState, ChangeEvent, FormEvent } from 'react';
import { LoginResponse } from "@/app/utils/response/LoginResponse";
import { LoginFormData } from "@/app/utils/request/LoginFormData";

interface LoginFormProps {
    onSubmit: (formData: LoginFormData) => Promise<LoginResponse>;
    onLoginSuccess: (response: LoginResponse) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onLoginSuccess }) => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const response = await onSubmit(formData);
            if (response && response.data && response.data.token) {
                onLoginSuccess(response);
            } else {
                console.error("Login failed: Token not received");
            }
        } catch (error) {
            console.error("Error occurred during login:", error);
        }
    };

    return (
        <div>
            <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
                <label className="block mb-2">
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                           className="block w-full rounded-md border border-cyan-300 p-2"/>
                </label>
                <label className="block mb-2">
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange}
                           className="block w-full rounded-md border border-cyan-300 p-2"/>
                </label>
                <button type="submit"
                        className="bg-cyan-600 text-white hover:bg-cyan-800 rounded-md p-2 w-full">Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
