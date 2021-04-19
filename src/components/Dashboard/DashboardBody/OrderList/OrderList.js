import React from 'react';
import './OrderList.css';
import OrderListItem from './OrderListItem/OrderListItem';

const orderList = [
    {
        name: "Ratna Begum",
        email: "ratna@gmail.com",
        service: "Test service",
        pay: "With card",
        status: "done"
    },
    {
        name: "SHarna Begum",
        email: "Sharna@gmail.com",
        service: "Untest service",
        pay: "With card",
        status: "pending"
    },
    {
        name: "Khadiza Begum",
        email: "khadiza@gmail.com",
        service: "No service",
        pay: "With card",
        status: "on-going"
    },
    {
        name: "Faruq Mondol",
        email: "faruq@gmail.com",
        service: "Jomidari service",
        pay: "With card",
        status: "done"
    },
    {
        name: "Shibli Sarkar",
        email: "sarkar@gmail.com",
        service: "Khet service",
        pay: "With card",
        status: "pending"
    },
]

const OrderList = () => {
    return (
        <div className="order-list container">
            <div className="table-container mt-5 p-5 bg-white">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Pay With</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map(order => <OrderListItem order={order}></OrderListItem>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;