"use client";
import React, {useState} from "react";
import RegisterForm, {RegisterFormData, RegisterResponse} from "@/app/components/RegisterForm";
import config from "../config/config";

const RegisterPage: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<RegisterFormData>({
        name: '',
        email: '',
        password: ''
    });

    const [formReset, setFormReset] = useState<boolean>(false);

    const handleSubmit = async (formData: RegisterFormData): Promise<RegisterResponse> => {
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

        setFormData({ name: '', email: '', password: '' });
        setError(null);
        setFormReset(true);

        return await response.json();
    };

    return (
        <div>
            <h1>Register</h1>
            <RegisterForm onSubmit={handleSubmit} formReset={formReset}/>
            {error && <p>{error}</p>}
        </div>
    );
}

export default RegisterPage;
