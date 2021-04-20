import React, { useContext, useEffect, useState } from 'react';
import './BookingList.css';
import BookingListItem from './BookingListItem/BookingListItem';
import { UserContext } from '../../../../App';
import Sidebar from '../SideBar/Sidebar';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        document.getElementById("loading").style.display = 'block';
        fetch('https://travel-agencyy.herokuapp.com/bookings/'+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            document.getElementById("loading").style.display = 'none';
            setBookingList(data);
        })
    }, [])

    return (
        <>
        <DashboardHeader></DashboardHeader>
        <div className="dashboard-body">
            <div className="row">
                <Sidebar></Sidebar>
                
                <div className="dashboard-content col-lg-10">
                    <div className="mt-5" id="booking-list">
                        <div className="container">
                            <div className="text-center mt-3 mb-3" id="loading" style={{display:'none'}}>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    bookingList.length === 0 &&
                                    <h1 className="col-md-12 text center mt-5 mb-t">No bookings found</h1>
                                }
                                {
                                    bookingList.map(booking => <BookingListItem key={booking._id} booking={booking}></BookingListItem>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BookingList;