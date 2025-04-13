import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const LOGIN_ENDPOINT = "http://localhost:5005/login";

export function AuthProvider({children}) {
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
    });

    const login = async (email, password) => {
        try {

            const res = await axios.post(LOGIN_ENDPOINT, {
                email,
                password
            });
            const user = res.data.user;
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            return true;
        } catch (err) {
            console.error("Login failed", err);
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
    );
    
}


