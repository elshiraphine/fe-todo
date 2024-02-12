import { NextApiRequest, NextApiResponse } from 'next';

interface RegisterFormData {
    name: string;
    email: string;
    password: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, password }: RegisterFormData = req.body;

    try {
        return res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to register' });
    }
}
