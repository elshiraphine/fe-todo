"use client"
import React, { useEffect, useState } from "react";

const HomePage: React.FC = () => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedToken = localStorage.getItem('token');
            setToken(storedToken);

            const userDataString = localStorage.getItem('user');
            if (userDataString) {
                const userData = JSON.parse(userDataString);
                setUser(userData);
            }
        }
    }, []);

    return (
        <div className="bg-white w-1/3 py-8 px-8 rounded-xl">
            <h2 className="text-xl font-bold text-cyan-800 mb-2">Home</h2>
            <p>Halo {user ? user.name : 'Not available'}!</p>
        </div>
    );
};

export default HomePage;
