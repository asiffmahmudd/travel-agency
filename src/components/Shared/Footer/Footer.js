import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="mt-5 pb-5 text-center">
            <hr/>
            <div className="container">
                <p>77 Belgium Hollow Road, First Street, Los Angeles, ZZ-96105</p>
                <p>email@domain.com</p>
                <p>+012 345 6789</p>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <hr/>
                        <div className="social">
                            <FontAwesomeIcon className="m-4" size="3x" icon={faGoogle}  color="#db4a39"/>
                            <FontAwesomeIcon className="m-4" size="3x" icon={faFacebook} color="#4285F4"/>
                            <FontAwesomeIcon className="m-4" size="3x" icon={faTwitter} color="#00acee"/>
                        </div>
                        <hr/>
                    </div>
                </div>
                <p>&#169; All Rights Reserved</p>
            </div>
            
        </footer>
    );
};

export default Footer;