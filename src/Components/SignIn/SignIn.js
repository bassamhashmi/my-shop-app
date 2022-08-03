import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const SignIn = () => {
    const [userEmail, setUserEmail] = React.useState("");
    const [userPassword, setUserPassword] = React.useState("");
    const [isAuthenticated, handleAuthChange] = useAuthContext();

    const navigate = useNavigate();
    const location = useLocation();

    const handleEmailChange = (event) => {
        setUserEmail(event.currentTarget.value);
    };
    const handlePasswordChange = (event) => {
        setUserPassword(event.currentTarget.value);
    };

    const handleAuthentication = () => {
        if (userEmail !== "bassam" && userPassword !== "bassam") {
            alert("Incorrect Details!");
            return;
        }

        if (location.state?.from) {
            navigate(location.state.from);
        }

        return handleAuthChange(true);
    };

    const handleSignOut = () => {
        return handleAuthChange(false);
    };

    const handleShopClick = () => {
        navigate("/", { replace: true });
    };

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <h4>You are already logged in </h4>
                    <button
                        style={{ marginRight: "20px" }}
                        onClick={handleShopClick}
                    >
                        Continue to Shop
                    </button>
                    <button onClick={handleSignOut}>SignOut</button>
                </div>
            ) : (
                <div className="SignIn">
                    <form onSubmit={handleAuthentication}>
                        <input
                            type="text"
                            placeholder="Email"
                            onChange={handleEmailChange}
                            value={userEmail}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={handlePasswordChange}
                            value={userPassword}
                        />
                        <button type="submit">SignIn</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default SignIn;
