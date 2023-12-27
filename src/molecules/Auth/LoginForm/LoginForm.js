import React, { useState, useRef } from 'react';
import Button from '../../../atoms/Buttons/Buttons';
import Input from '../../../atoms/Inputs/Input';
import AuthService from '../../../services/Auth/AuthService';
import { useAuthContext } from '../../../contexts/authContext';
import { Link, useNavigate } from 'react-router-dom';
import './loginForm.css';

const LoginForm = ({}) => {

    const { login } = useAuthContext();
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();      
        const requestPayload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }  
        const resp = await AuthService.login(requestPayload)
        if (resp.accessToken){
            login()     
            localStorage.setItem('token', resp.accessToken)
            navigate('/')
        }        
    }
           

    const emailRef = useRef();
    const passwordRef = useRef();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={handleSubmit} id="form">
            <h5 className='form-title'>Welcome Back</h5>
                <Input type="text" placeholder="Email" onChange={setEmail} 
                        ref={emailRef}
                        value={email}
                />                                                
                <Input type="password" placeholder="Password"  onChange={setPassword}  
                    value={password}
                    ref={passwordRef}
                />            
            <Button type="submit">Login</Button>
            <span className='form-text'>Don't have an account? <Link to='/register'>Register</Link></span>
        </form>
    );
};

export default LoginForm;
