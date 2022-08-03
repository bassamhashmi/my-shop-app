import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./context/authContext";

const AuthRoute = () => {
    const location = useLocation();
    const isAuthenticated = useAuthContext();

    return (
        <>
            {isAuthenticated[0] ? (
                <Outlet />
            ) : (
                <Navigate to="/signin" replace state={{ from: location }} />
            )}
        </>
    );
};

export default AuthRoute;
