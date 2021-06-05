import React, { useEffect, useState } from 'react';
import './BookingList.css';
import BookingListItem from './BookingListItem/BookingListItem';
import Sidebar from '../SideBar/Sidebar';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import { useAuth } from '../../../../Context/AuthContext';

const BookingList = () => {
    const {loggedInUser} = useAuth()
    const [bookingList, setBookingList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.getElementById("loading").style.display = 'block';
        setLoading(true)
        fetch('https://travel-agencyy.herokuapp.com/bookings/'+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            document.getElementById("loading").style.display = 'none';
            setBookingList(data);
            setLoading(false)
        })
        .catch(e => {
            alert(e.message);
            setLoading(false);
        })
    }, [loggedInUser])

    return (
        <>
        <DashboardHeader title="Booking List"></DashboardHeader>
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
                                    !loading && bookingList.length === 0 &&
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