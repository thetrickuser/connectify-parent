import {isAuthenticated} from "../utils/auth.ts";
import {Navigate} from "react-router";
import React, {ReactNode} from "react";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    return isAuthenticated() ? children : <Navigate to={"/login"}/>
}

export default ProtectedRoute;