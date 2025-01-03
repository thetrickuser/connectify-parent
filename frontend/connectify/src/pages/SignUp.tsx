import {Link, useNavigate} from "react-router";
import {ChangeEvent, useState} from "react";
import {login, register} from "../utils/auth.ts";

const years = Array.from(new Array(new Date().getFullYear() - 1960 + 1), (_val, index) => 1960 + index).reverse();

interface FormData {
    firstname: string;
    surname: string;
    day: number;
    month: number;
    year: number;
    gender: string;
    email: string;
    password: string;
}

const SignUp = () => {
    const [formData, setFormData] = useState<FormData>({
        firstname: "",
        surname: "",
        email: "",
        password: "",
        day: 0,
        month: 0,
        year: 0,
        gender: ""
    })
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = async () => {
        const dob = new Date(formData.day, formData.month, formData.year);
        const fullName = formData.firstname + " " + formData.surname;
        const request = {fullName, dob, gender: formData.gender, email: formData.email, password: formData.password};
        const response = await register(request);
        if (response.statusCode === 201) {
            const loginResponseCode = await login({email: formData.email, password: formData.password});
            if (loginResponseCode === 200) {
                navigate("/home");
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            <h1 className="text-5xl font-bold text-center text-blue-600 mt-3">Connectify</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-4">
                <h1 className="text-3xl text-center">Create New Account</h1>
                <hr className="my-6"/>
                <form className="mt-6">
                    <div className="mb-3">
                        <div className="flex flex-row gap-3">
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                placeholder="First Name"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                placeholder="Surname"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                        <div className="flex flex-row gap-3">
                            <select
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                name="day"
                                value={formData.day}
                                onChange={handleChange}
                            >
                                {[...Array(31)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                            <select
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                name="month"
                                value={formData.month}
                                onChange={handleChange}
                            >
                                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                                    <option key={i + 1} value={i + 1}>{month}</option>
                                ))}
                            </select>
                            <select
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                            >
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <div className="flex items-center gap-3 mt-1">
                            <label
                                className="inline-flex items-center mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="MALE"
                                    checked={formData.gender === "MALE"}
                                    onChange={handleChange}
                                    className="form-radio h-4 w-4 text-blue-600"
                                />
                                <span className="ml-2 text-gray-700">Male</span>
                            </label>
                            <label
                                className="inline-flex items-center mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="FEMALE"
                                    checked={formData.gender === "FEMALE"}
                                    onChange={handleChange}
                                    className="form-radio h-4 w-4 text-blue-600"
                                />
                                <span className="ml-2 text-gray-700">Female</span>
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="New Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <hr className="my-6"/>
                <div className="text-center">
                    <button
                        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50"
                        onClick={handleSubmit}
                    >
                        Create New Account
                    </button>
                    <div className="mt-4 text-center">
                        <Link to={"/login"} className="text-blue-600 text-md">Already have an account?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
