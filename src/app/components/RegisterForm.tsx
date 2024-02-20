"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { RegisterResponse } from "@/app/utils/response/RegisterResponse";
import { RegisterFormData } from "@/app/utils/request/RegisterFormData";

interface RegisterFormProps {
    onSubmit: (formData: RegisterFormData) => Promise<RegisterResponse>;
    formReset?: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, formReset }) => {
    const [formData, setFormData] = useState<RegisterFormData>({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        if (formReset) {
            setFormData({
                name: '',
                email: '',
                password: ''
            });
        }
    }, [formReset]);

    const [registrationMessage, setRegistrationMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const response = await onSubmit(formData);
            if (response && response.data && response.data.message === "user_registered_successfully") {
                setRegistrationMessage("Registration successful!");
            }
        } catch (error) {
            console.error("Error occurred during registration:", error);
        }
    };

    return (
        <div>
            {registrationMessage && <p className="font-bold text-cyan-800 mb-4">{registrationMessage}</p>}
            <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
                <label className="block mb-2">
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                           className="block w-full rounded-md border border-cyan-300 p-2"/>
                </label>
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
                        className="bg-cyan-600 text-white hover:bg-cyan-800 rounded-md p-2 w-full">Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;