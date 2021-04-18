import React from 'react';
import Header from '../../Shared/Header/Header';
import './HomeHeader.css';

const HomeHeader = () => {
    return (
        <section className="home-header">
            <Header></Header> 
            <div className="banner">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="banner-text col-md-5 my-auto">
                            <h3 className="text-white">LET'S ENJOY THE TRAVEL</h3>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus, eget molestie diam accumsan.</p>
                            <button className="btn btn-cstm">Book Now</button>
                        </div>
                    </div>
                        
                </div>
            </div> 
        </section>
    );
};

export default HomeHeader;