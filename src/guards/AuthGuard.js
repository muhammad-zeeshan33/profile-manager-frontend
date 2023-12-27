import React, { useEffect, useState} from "react";
import { useAuthContext } from "../contexts/authContext";

const AuthGuard = ({ Component }) => {
    const { isLoggedIn } = useAuthContext();
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {        
        const token = localStorage.getItem("token");
        if (token || isLoggedIn) {
            setLoading(false);            
        }
    }, []);
    

    if (loading) {
        return null;
    }

    return <Component />;
};

export default AuthGuard;