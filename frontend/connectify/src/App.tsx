import {BrowserRouter, Route, Routes} from "react-router";
import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
