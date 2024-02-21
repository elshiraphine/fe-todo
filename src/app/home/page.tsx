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
        <div>
            <h1>Home</h1>
            <p>Halo {user.name}</p>
        </div>
    );
};

export default HomePage;
