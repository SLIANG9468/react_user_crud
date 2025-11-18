import React from "react";
import './NavBar.css';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {

    return (
        <header>
            <nav>
                <h1> Mechanic App</h1>
                <ul>
                    <NavLink className={'navLink'} to='/'>Home</NavLink>
                    <NavLink className={'navLink'} to='/login'> Login</NavLink>
                    <NavLink className={'navLink'} to='/register'> Register</NavLink>

                </ul>
            </nav>
        </header>
    )
}

export default NavBar