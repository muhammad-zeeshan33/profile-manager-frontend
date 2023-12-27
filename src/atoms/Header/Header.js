import React from "react";
import "./header.css";
const Header = ({ children }) => {
    return (
        <div className="page-header header-filter" data-parallax="true"            
            style={{ backgroundImage: "url('https://source.unsplash.com/featured/1270x801')" }}>            
            <div id="overlay"></div>
        </div>
    );
}

export default Header;