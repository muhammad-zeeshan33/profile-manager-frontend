import React from 'react';
import RegisterForm from '../../molecules/Auth/RegisterForm/RegisterForm';

const RegisterPage = () => {
    return (        
        <div className='register-card' style={{
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}>
            <RegisterForm />
        </div>        
    );
}

export default RegisterPage;