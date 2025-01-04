import {BrowserRouter, Route, Routes} from "react-router";
import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import Home from "./pages/Home.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Profile from "./pages/Profile.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
                <Route path="/profile" element={
                    // <ProtectedRoute>
                        <Profile/>
                        // </ProtectedRoute>
                        } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
