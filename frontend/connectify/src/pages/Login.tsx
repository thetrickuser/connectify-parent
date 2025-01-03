import {Link, useNavigate} from "react-router";
import {ChangeEvent, FormEvent, useState} from "react";
import {login, LoginRequest} from "../utils/auth.ts";

const Login = () => {
    const [formData, setFormData] = useState<LoginRequest>({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await login(formData);
            navigate("/home")
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-5xl font-bold text-center text-blue-600">Connectify</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-4">
                <h1 className="text-3xl text-center">Login to Connectify</h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Log In
                    </button>
                </form>
                <div className="flex flex-row gap-3 justify-center">
                    <div className="mt-4 text-center">
                        <Link to={"/"} className="text-blue-600 text-sm">Forgot password?</Link>
                    </div>
                    <div className="mt-4 text-center">
                        <Link to={"/signup"} className="text-blue-600 text-sm">Sign up for Connectify</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;