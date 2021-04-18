import React from 'react';
import './BookingList.css';
import img1 from '../../../../img/service-1.png';
import BookingListItem from './BookingListItem/BookingListItem';

const services = [
    {
        img: img1,
        title: "ACCOMMODATION",
        desc: "Lorem ipsum dolor sit amet elit vehicula cursus.",
        price: 100,
        status: "on-going"
    },
    {
        img: img1,
        title: "ACCOMMODATION",
        desc: "Lorem ipsum dolor sit amet elit vehicula cursus.",
        price: 100,
        status: "done"
    },
    {
        img: img1,
        title: "ACCOMMODATION",
        desc: "Lorem ipsum dolor sit amet elit vehicula cursus.",
        price: 100,
        status: "pending"
    },
    {
        img: img1,
        title: "ACCOMMODATION",
        desc: "Lorem ipsum dolor sit amet elit vehicula cursus.",
        price: 100,
        status: "done"
    }
]

const BookingList = () => {
    return (
        <div className="booking-list mt-5">
            <div className="container">
                <div className="row">
                    {
                        services.map(service => <BookingListItem service={service} ></BookingListItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingList;