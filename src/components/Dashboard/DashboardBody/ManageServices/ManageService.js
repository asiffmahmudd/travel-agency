import React from 'react';
import './ManageService.css';
import img1 from '../../../../img/service-1.png';
import ManageServiceItem from './ManageServiceItem/ManageServiceItem';

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


const ManageService = () => {
    return (
        <div className="manage-services">
            <div className="container">
                <div className="row">
                    {
                        services.map(service => <ManageServiceItem service={service}></ManageServiceItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageService;