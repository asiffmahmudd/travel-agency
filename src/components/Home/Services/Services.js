import React, { useEffect, useState } from 'react';
import img1 from '../../../img/service-1.png';
import ServiceItem from './ServiceItem/ServiceItem';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/services')
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