import { createContext, useContext, useState, useEffect }from "react";

const AuthContext = createContext();

//hook to use context easily
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //checking for user on initial load from local storage
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(sroredUser));
    }, []);

    //login function
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    //logout function
    const logout = () => {
        setUser(null);
        localStorage.removeItem
    }
}