import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="header-navbar">
                <Link to="/">Logo
                </Link>
            </nav>
        </div>
    )
}

export default Header