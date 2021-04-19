import React, { useContext, useEffect, useState } from 'react';
import './BookingList.css';
import img1 from '../../../../img/service-1.png';
import BookingListItem from './BookingListItem/BookingListItem';
import { UserContext } from '../../../../App';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/bookings/'+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBookingList(data);
        })
    }, [])

    return (
        <div className="booking-list mt-5">
            <div className="container">
                <div className="row">
                    {
                        bookingList.map(service => <BookingListItem key={service._id} service={service.booking.selectedService.service} status={service.booking.status}></BookingListItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingList;