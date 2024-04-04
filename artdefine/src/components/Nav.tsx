import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
    return (
        <nav className='navigation'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/listpage">Listpage</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/add">Add Post</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
// Path: artdefine/src/components/Nav.tsx