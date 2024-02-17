"use client";
import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';

export interface RegisterFormData {
    name: string;
    email: string;
    password: string;
}

interface User {
    name: string;
    email: string;
    password: string;
    updated_at: string;
    created_at: string;
    id: number;
}

export interface RegisterResponse {
    code: number;
    status: string;
    data: {
        message: string;
        user: User;
    }
    links: {
        self: string;
    }
    meta: {
        date_accessed: string;
        version: string;
    }
}

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
            {registrationMessage && <p>{registrationMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;