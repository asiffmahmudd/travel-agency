import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './Book.css';
import { UserContext } from '../../../../App';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useHistory } from 'react-router';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Book = () => {
    const { register, handleSubmit, reset } = useForm();
    const [userInfo, setUserInfo] = useState(null);
    const [services, setServices] = useState([]);
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedService, setSelectedService] = useState(null);

    const onSubmit = data => {
        const tempService = services.find(service => service.service.title === data.service);
        setSelectedService(tempService);
        setUserInfo(data);   
    }

    const handlePayment = (paymentId) => {
        const bookingDetails = {
            user : userInfo,
            payment: paymentId,
            date: new Date(),
            status: "pending",
            selectedService
        }
        console.log(bookingDetails);
        document.getElementById('loading').style.display = 'block';

        fetch('http://localhost:4000/addBooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                document.getElementById('loading').style.display = 'none';
                reset();
                document.getElementById('payment-form').style.display = 'none';
                document.getElementById('payment-success').style.display = 'block';
            }
        })
    }

    useEffect(() => {
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    },[])

    return (
        <div className="book">
            <div className="form-container mt-5">
                <form className="col-lg-6" onSubmit={handleSubmit(onSubmit)} style={{display: userInfo ?"none":"block"}}>
                    <div className="form-group ">
                        <input type="text" {...register("name")} className="form-control border-0" readOnly id="name" name="name" aria-describedby="Name" defaultValue={loggedInUser.name} placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" {...register("email")} className="form-control border-0" readOnly name="email" id="email" defaultValue={loggedInUser.email} placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                        <select {...register("service")} className="form-control border-0" name="service" id="service" required>
                            {
                                services.map(service => <option key={service._id}>{service.service.title}</option>)
                            }
                        </select>
                    </div>
                    <button type="submit" className="btn btn-cstm">Submit</button>
                    
                </form>
                <div id="payment-form" style={{display: userInfo ?"block":"none"}}>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm handlePayment={handlePayment}></CheckoutForm>
                    </Elements>
                </div>
                <div className="text-center mt-3 mb-3" id="payment-success" style={{display:'none'}}>
                    <h1 style={{color:'forestgreen'}}>Successfully booked for the service</h1>
                </div>
                <div className="text-center mt-3 mb-3" id="loading" style={{display:'none'}}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;