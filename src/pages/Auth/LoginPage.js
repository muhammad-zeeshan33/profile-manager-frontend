import React from 'react';
import LoginForm from '../../molecules/Auth/LoginForm/LoginForm';

const LoginPage = () => {
    return (
        <div style={{
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}>            
            <LoginForm />
        </div>
    );
};

export default LoginPage;
