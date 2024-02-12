"use client";

import React, { useState } from "react";
import RegisterForm from "@/app/components/RegisterForm";
import config from "../config/config";
const RegisterPage: React.FC = () => {
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (formData: any) => {
        try {
            const response = await fetch(`${config.baseURL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorMessage = "Network response was not ok";
                setError(errorMessage);

                return;
            }

            setError(null);
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <RegisterForm onSubmit={handleSubmit}/>
            {error && <p>{error}</p>}
        </div>
    );
}

export default RegisterPage;
