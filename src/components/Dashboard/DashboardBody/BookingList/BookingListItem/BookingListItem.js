import React from 'react';
import './BookingListItem.css';

const BookingListItem = ({service}) => {

    const {img, desc, title, status} = service;
    return (
        <div className="booking-list-item col-lg-4 shadow-sm bg-white border-0 m-3 p-3">
            <img src={img} alt=""/>
            <h6 className="mt-3">{title}</h6>
            <p>{desc}</p>
            <span className={status +" btn status"}>{status}</span>
        </div>
    );
};

export default BookingListItem;