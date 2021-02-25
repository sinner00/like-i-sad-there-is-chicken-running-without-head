import React from "react";
import "./Login.scss"



function Login() {
    return (
        <div className="login">
            <i className="bi bi-door-open"> </i>
            <a href="/" className="login-registration">
                <span className="link-login-registration">
                    Login/Registration
                </span>
            </a>
        </div>
    );
}

export default Login;
