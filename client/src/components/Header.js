import React from 'react';
import { Link } from 'react-router-dom'; 
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui container">
            <div className="ui secondary pointing menu">
                <Link className="active item" to="/">
                    Streamy
                </Link>
                <div className="right menu">
                    <Link className="ui item" to="/">
                        All Streams
                    </Link>
                    <Link className="ui item" to="/">
                        Login
                    </Link>
                    <GoogleAuth />
                </div>
            </div>
        </div>
    )
}

export default Header;