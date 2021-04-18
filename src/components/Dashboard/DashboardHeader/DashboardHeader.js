import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png';
import './DashboardHeader.css';

const DashboardHeader = () => {
    return (
        <header className="dashboard-header">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-2 text-center">
                        <Link to="/">
                            <img src={logo} style={{'height':'100px'}} alt=""/>
                        </Link>
                    </div>
                    <div className="col-lg-9">
                        <div className="title">
                            <h3>Option-title</h3>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;