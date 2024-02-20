"use client";

import React, {useState} from "react";
import {RegisterFormData} from "@/app/utils/request/RegisterFormData";
import RegisterForm from "@/app/components/RegisterForm";
import {registerUser} from "@/app/utils/repository/registerRepository";
import {RegisterResponse} from "@/app/utils/response/RegisterResponse";
import Link from "next/link";

const Register: React.FC = () => {
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
            setFormData({name: '', email: '', password: ''});
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
        <div className="bg-white w-1/3 py-8 px-8 rounded-xl">
            <h2 className="text-xl font-bold text-cyan-800 mb-2">Register</h2>
            <div className="flex justify-between mb-4">
                <p className="">Sudah memiliki akun?</p>
                <Link className="text-cyan-800 hover:underline" href="/">
                    Login
                </Link>
            </div>
            <RegisterForm onSubmit={handleSubmit} formReset={formReset}/>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Register;