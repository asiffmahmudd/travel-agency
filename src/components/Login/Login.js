import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import google from '../../img/google.png';
import logo from '../../img/logo.png';
import './Login.css';


const Login = () => {

    const {signIn} = useAuth()
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = async () => {
        await signIn()
        history.push(from)
    }

    return (
        <>
            <div className="text-center ">
                <Link to="/"><img src={logo} style={{'height': '200px'}} alt=""/></Link>
            </div>
            <div className="login">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="p-5 col-md-5 mt-5 mb-5 border shadow rounded">
                            <h3>Login With</h3>
                            <div className="google border p-2 mt-4" onClick={handleSignIn}>
                                <span className="google-logo"><img src={google} alt=""/></span>
                                <span className="text-center w-100 d-inline-block">Continue with Google</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Login;