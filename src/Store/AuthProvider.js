import AuthContext from "./auth-context";
import { useState } from "react";

const AuthProvider = props => {
    let initialToken = localStorage.getItem('token');
    let initialEmail = localStorage.getItem('email');
    const [token, setToken] = useState(initialToken);
    const [email, setEmail] = useState(initialEmail);
    const userIsLoggedIn = !!token;

        const loginHandler = (token, email) => {
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            setToken(token);
            setEmail(email);
           
        }

    const cartContext = {
        token: token,
        email: email,  
        login: loginHandler,
        isLoggedIn: userIsLoggedIn,
    }

    return (
        <AuthContext.Provider value={cartContext}>
            {props.children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;

