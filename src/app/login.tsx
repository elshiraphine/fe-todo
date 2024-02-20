"use client"
import React, {useState} from "react";
import {LoginFormData} from "@/app/utils/request/LoginFormData";
import LoginForm from "@/app/components/LoginForm";
import {loginUser} from "@/app/utils/repository/loginRepository";
import {LoginResponse} from "@/app/utils/response/LoginResponse";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Login:React.FC = () => {
    const [, setError] = useState<string | null>(null);
    const [, setUser] = useState<any | null>(null);
    const [] = useState<LoginFormData>({
        email: '',
        password: ''
    });

    const router = useRouter();

    const handleLoginSuccess = (response: LoginResponse): void => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        router.push('/home');
    };

    const handleSubmit = async (formData: LoginFormData): Promise<LoginResponse> => {
        try {
            const response: LoginResponse = await loginUser(formData);
            if (response && response.data && response.data.token) {
                handleLoginSuccess(response);
                return response;
            } else {
                setError("Login failed: Token not received");
                throw new Error("Login failed: Token not received");
            }
        } catch (error) {
            // @ts-ignore
            setError("Error occurred during login: " + error.message);
            throw error;
        }
    };


    return (
        <div className="bg-white w-1/3 py-8 px-8 rounded-xl">
            <h2 className="text-xl font-bold text-cyan-800 mb-2">Masuk</h2>
            <div className="flex justify-between mb-4">
                <p className="">Belum memiliki akun?</p>
                <Link className="text-cyan-800 hover:underline" href="/register">
                    Register
                </Link>
            </div>

            <LoginForm onSubmit={handleSubmit} onLoginSuccess={handleLoginSuccess} />
        </div>
    )
}

export default Login;