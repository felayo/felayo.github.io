import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



const Navbar = () => (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/" className="logo">
            <h1>FELAYO</h1>
        </Link>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </li>
            <li className="nav-item ml-5">
                <Link to="/about" className="nav-link">
                    About
                </Link>
            </li>
            <li className="nav-item ml-5">
                <Link to="/contact" className="nav-link">
                    Contact
                </Link>
            </li>
        </ul>
        
    </NavWrapper>
);

export default Navbar

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
.logo {
    text-decoration: none;
}

`;