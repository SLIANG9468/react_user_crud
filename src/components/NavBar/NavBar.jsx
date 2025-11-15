import React from "react";
import './NavBar.css';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {

    return (
        <header>
            <nav style={{display:'flex', justifyContent: 'space-between', padding:'2vs'}}>
                <h1> Mechanic App</h1>
                <ul style={{display:'flex', width:'40vw', justifyContent:'space-between', alignItems:'center'}}>
                    <li className="navLink">Log In</li>
                    <li className="navLink">Sign Up</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar