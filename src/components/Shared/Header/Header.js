import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className="bg-light">
            <div className ="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} style={{'height':'65px'}} alt=""/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">
                                    <button className="btn btn-dark">Admin</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    <button className="btn btn-cstm">Login</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;