import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SignInForm } from "../components/SignInForm";
import { AppContext } from "../contexts/AppContext";
import "../styles/SignInPage.css";

export function SignInPage() {
    const context = useContext(AppContext);

    function handleSubmit(formData) {
        context.setUsername(formData.username);
        context.setAvatarIndex(formData.avatarIndex);
    }

    if (context.isSignedIn) {
        return <Navigate to="/chat" replace />;
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat App</span>
                    <span className="title">Login</span>
                        <div className="sign-in-page">
                            <SignInForm onSubmit={handleSubmit} />
                        </div>
            </div>
        </div>
    );
};
