import {useNavigate} from "react-router";
import {ChangeEvent, FormEvent, useState} from "react";
import {login, LoginRequest} from "../utils/auth.ts";

const Landing = () => {
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
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <header className="bg-blue-600 w-full py-4">
                <h1 className="text-4xl text-white text-center">Connectify</h1>
            </header>
            <main className="flex-grow flex flex-col justify-center items-center mt-6">
                <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl">
                    <div className="p-6 md:w-1/2 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Connect with friends and the world
                            around you on Connectify.</h2>
                        <p className="text-gray-600 mt-4">See photos and updates from friends in News Feed. Share what's
                            new in your life on your Timeline. Find more of what you're looking for with Connectify
                            Search.</p>
                    </div>
                    <div className="p-6 md:w-1/2 bg-white rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email or Phone</label>
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
                        <div className="mt-4 text-center">
                            <a href="#" className="text-blue-600 text-sm">Forgot password?</a>
                        </div>
                        <hr className="my-6"/>
                        <div className="text-center">
                            <button
                                className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
                                onClick={() => navigate("/signup")}>
                                Create New Account
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-gray-800 w-full py-4 text-center text-white">
                <p>© 2025 Connectify</p>
            </footer>
        </div>
    )
}

export default Landing;