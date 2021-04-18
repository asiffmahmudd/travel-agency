import React from 'react';
import Sidebar from './SideBar/Sidebar';
import './DashboardBody.css';
import Review from './Review/Review';
import Book from './Book/Book';
import './DashboardBody.css';
import BookingList from './BookingList/BookingList';

const DashboardBody = () => {
    return (
        <div className="dashboard-body">
            <div className="row">
                <Sidebar></Sidebar>
                
                <div className="dashboard-content col-lg-10">
                    {/* <Review></Review> */}
                    {/* <Book></Book> */}
                    <BookingList></BookingList>
                </div>
            </div>
        </div>
    );
};

export default DashboardBody;