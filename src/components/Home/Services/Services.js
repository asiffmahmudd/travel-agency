import React, { useEffect, useState } from 'react';
import { serverUrl } from '../../../ServerUrl';
import ServiceItem from './ServiceItem/ServiceItem';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        document.getElementById("loading").style.display = 'block';
        fetch(serverUrl+'/services')
        .then(res => res.json())
        .then(data => {
            document.getElementById("loading").style.display = 'none';
            setServices(data);
        })
    }, [])

    return (
        <section className="services mt-5 mb-5" id="services">
            <div className="container">
                <h3 className="text-center">Services</h3>
                <div className="text-center mt-3 mb-3" id="loading" style={{display:'none'}}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                <div className="row mt-4 justify-content-center">
                    {
                        services.map(service => <ServiceItem key={service._id} id={service._id} service={service.service}></ServiceItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;