import React from 'react';
import NavLink from './NavLink';
import '../styles/SideBar.scss';
const SideBar = (props) => (
    <div className="sidebar">
        <div>
            <NavLink
                to="/"
            >
                <i className="fa fa-home fa-2x" aria-hidden="true" />            
            </NavLink>
            <NavLink
                to="/doclist"
            >
                <i className="fa fa-files-o fa-2x" aria-hidden="true" />
            </NavLink>
            <NavLink
                to="/trends"
            >
                <i className="fa fa-cog fa-2x" aria-hidden="true" />
            </NavLink>
            {
                props.isSignIn
                ? <NavLink
                    to=""
                    onClick={props.signOutRequest}
                >
                    <i className="fa fa-sign-out fa-2x" aria-hidden="true" />
                </NavLink> 
                : <NavLink
                    to="/auth/signin"
                >
                    <i className="fa fa-sign-in fa-2x" aria-hidden="true" />
                </NavLink>
            }
        </div>
    </div>
);
export default SideBar;