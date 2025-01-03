import {Link} from "react-router";

const Login = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-5xl font-bold text-center text-blue-600">Connectify</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-4">
                <h1 className="text-3xl text-center">Login to Connectify</h1>
                <form className="mt-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Password"
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