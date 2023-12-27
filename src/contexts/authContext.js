import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
        isLoggedIn: false,
        login: () => {},
        logout: () => {}
});

const AuthProvider = ({ children }) => {    
    const [isLoggedIn, setIsLoggedIn] = useState(false);    

    const navigate = useNavigate();

    useEffect(() => {        
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            navigate('/');
        }else{
            setIsLoggedIn(false);
            navigate('/login');
        }
    }, []);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
    }
    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};


const useAuthContext = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within a AuthProvider');
    }
    return context;
}

export {
    AuthProvider,
    useAuthContext
}