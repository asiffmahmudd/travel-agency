import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem/ServiceItem';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('https://travel-agencyy.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    }, [])

    return (
        <section className="services mt-5 mb-5">
            <div className="container">
                <h3 className="text-center">Services</h3>
                <div className="row mt-4 justify-content-center">
                    {
                        services.map(service => <ServiceItem key={service._id} service={service.service}></ServiceItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;