import React from 'react';
import './BookingListItem.css';
import dateFormat from 'dateformat';

const BookingListItem = ({booking}) => {
    const {image, desc, title} = booking.booking.selectedService.service;
    return (
        <div className="booking-list-item col-lg-4 shadow-sm bg-white border-0 m-3 p-3">
            <img src={image} alt=""/>
            <h6 className="mt-3">{title}</h6>
            <p>{desc}</p>
            <p>{dateFormat(booking.date)}</p>
            <span className={booking.booking.status +" btn status"}>{booking.booking.status}</span>
        </div>
    );
};

export default BookingListItem;