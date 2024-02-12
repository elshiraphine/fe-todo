import React, { useState, ChangeEvent, FormEvent } from 'react';

interface RegisterFormData {
    name: string;
    email: string;
    password: string;
}

interface RegisterFormProps {
    onSubmit: (formData: RegisterFormData) => Promise<void>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<RegisterFormData>({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        await onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;