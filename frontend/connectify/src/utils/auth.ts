import {jwtDecode} from 'jwt-decode';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export interface LoginRequest {
    email: string;
    password: string;
}

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
        jwtDecode(token);
        return true;
    } catch (error) {
        return false;
    }
};

export async function register(request: {
    fullName: string;
    dob: Date;
    gender: string;
    email: string;
    password: string
}) {
    try {
        const response = await fetch(`${BACKEND_URL}/users/auth/register`, {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(request),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function login(formData: LoginRequest) {
    try {
        const response = await fetch(`${BACKEND_URL}/users/auth/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log(result);
        localStorage.setItem("token", result.token);
        return result.statusCode;
    } catch (error) {
        console.error("Error:", error);
    }
}