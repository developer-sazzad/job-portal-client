// import { useEffect, useState } from "react";
import { useState } from "react";
import AuthContext from "./AuthContext";



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
            
    //     }, 3000);
    // }, [])

    const authInfo = {
        user,
        loading
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;