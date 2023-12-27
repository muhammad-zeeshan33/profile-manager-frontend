import React , { useRef } from 'react';
import Button from '../../../atoms/Buttons/Buttons';
import Input from '../../../atoms/Inputs/Input';
import AuthService from '../../../services/Auth/AuthService';
import { useAuthContext } from '../../../contexts/authContext';
import './registerForm.css';
import { Link, useNavigate } from 'react-router-dom';
const RegisterForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const { login } = useAuthContext();
    const navigate = useNavigate();


    const usernameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();   

    const handleSubmit = (event) => {
        event.preventDefault();     
        if(passwordRef.current.value === '' || confirmPasswordRef.current.value === '' || usernameRef.current.value === ''){
            alert('Passwords or username is empty')
            return
        }
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            alert('Passwords do not match')
            return
        }
        const requestPayload = {
            email: usernameRef.current.value,
            password: passwordRef.current.value,            
        }
        AuthService.register(requestPayload)
            .then((resp) => {
                if(resp.message){
                    alert(resp.message)
                    return
                }
                if (resp.accessToken){
                    login()     
                    localStorage.setItem('token', resp.accessToken)
                    navigate('/')
                }                
            })
            .catch((err) => {
                console.log(err)
            })
    };

    return (
        <form onSubmit={handleSubmit} id='form'>
            <h5 className='form-title'>Create New Account</h5>
            <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={setUsername}
                ref={usernameRef}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={setPassword}                
                ref={passwordRef}
            />
            <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={setConfirmPassword}                
                ref={confirmPasswordRef}
            />
            <Button type="submit">Register</Button>
            <span className='form-text'>Already have an account? <Link to='/login'>Login</Link></span>
        </form>
    );
};

export default RegisterForm;
