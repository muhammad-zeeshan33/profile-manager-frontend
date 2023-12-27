import React from 'react';
import { useAuthContext } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const { logout } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="#">Profile Manager</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <button className="btn btn-light" onClick={handleLogout}>Logout <span className="sr-only">(current)</span></button>
                    </li>                                
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
