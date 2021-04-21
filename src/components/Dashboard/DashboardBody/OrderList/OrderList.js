import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import Sidebar from '../SideBar/Sidebar';
import './OrderList.css';
import OrderListItem from './OrderListItem/OrderListItem';

const OrderList = () => {

    const [orderList, setOrderList] = useState([]);

    useEffect( () =>{
        document.getElementById("loading").style.display = 'block';
        fetch('https://travel-agencyy.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => {
            setOrderList(data);
            document.getElementById("loading").style.display = 'none';
        })
    }, [])

    return (
        <>
        <DashboardHeader title="Order List"></DashboardHeader>
        <div className="dashboard-body">
            <div className="row">
                <Sidebar></Sidebar>
                
                <div className="dashboard-content col-lg-10">
                    <div className="container" id="order-list">
                        <div className="text-center mt-3 mb-3" id="loading" style={{display:'none'}}>
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        {
                            orderList.length === 0 &&
                            <h1 className="text-center mt-5">No orders found</h1>
                        }
                        {
                            orderList.length > 0 &&
                            <div className="table-container mt-5 p-5 bg-white">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Service</th>
                                            <th scope="col">Payment</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orderList.map(order => <OrderListItem key={order._id} id={order._id} order={order}></OrderListItem>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default OrderList;