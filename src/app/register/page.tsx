"use client";
import React, { useState } from "react";
import { RegisterFormData } from "@/app/utils/request/RegisterFormData";
import RegisterForm from "@/app/components/RegisterForm";
import { registerUser } from "@/app/utils/repository/registerRepository";
import {RegisterResponse} from "@/app/utils/response/RegisterResponse";

const RegisterPage: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [, setFormData] = useState<RegisterFormData>({
        name: '',
        email: '',
        password: ''
    });

    const [formReset, setFormReset] = useState<boolean>(false);

    const handleSubmit = async (formData: RegisterFormData): Promise<RegisterResponse> => {
        try {
            const response = await registerUser(formData);
            setFormData({ name: '', email: '', password: '' });
            setError(null);
            setFormReset(true);
            return response;
        } catch (error) {
            // @ts-ignore
            setError("Error occurred during registration: " + error.message);
            throw error;
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <RegisterForm onSubmit={handleSubmit} formReset={formReset} />
            {error && <p>{error}</p>}
        </div>
    );
}

export default RegisterPage;
