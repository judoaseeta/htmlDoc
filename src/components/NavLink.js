import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavLink.scss';
const NavLinkComponent = ({children, exact, to, onClick}) => (
    <NavLink
        className='navlink'
        activeClassName='active'
        exact
        to={to}
        onClick={onClick}
    >
        {children}
    </NavLink>
);
export default NavLinkComponent;