import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceItem.css'

const ServiceItem = ({service, id}) => {
    const {image,title,desc,price} = service;
    return (
        <div className="col-md-5 service-item mt-4 shadow-sm p-3 m-3">
            <div className="row">
                <div className="col-md-3">
                    <img src={image} className="service-img" alt=""/>
                </div>
                <div className="col-md-9">
                    <h6>{title}</h6>
                    <p>{desc}</p>
                    <strong>${price}</strong>
                    <div className="mt-3">
                        <Link to={`/book/${id}`}><button className="btn btn-cstm">Book Now</button></Link>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default ServiceItem;