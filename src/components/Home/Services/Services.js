import React from 'react';
import img1 from '../../../img/service-1.png';
import ServiceItem from './ServiceItem/ServiceItem';

const services = [
    {
        img: img1,
        title: "ACCOMMODATION",
        desc: "Lorem ipsum dolor sit amet elit vehicula cursus.",
        price: 100
    },
    {
        img: img1,
        title: "ACCOMMODATION",
        desc: "Lorem ipsum dolor sit amet elit vehicula cursus.",
        price: 100
    },
    {
        img: img1,
        title: "ACCOMMODATION",
        desc: "Lorem ipsum dolor sit amet elit vehicula cursus.",
        price: 100
    },
    {
        img: img1,
        title: "ACCOMMODATION",
        desc: "Lorem ipsum dolor sit amet elit vehicula cursus.",
        price: 100
    }
]

const Services = () => {
    return (
        <section className="services mt-5 mb-5">
            <div className="container">
                <h3 className="text-center">Services</h3>
                <div className="row mt-4 justify-content-center">
                    {
                        services.map(service => <ServiceItem service={service}></ServiceItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;