import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Book.css';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Book = () => {
    const { register, handleSubmit } = useForm();
    const [userInfo, setUserInfo] = useState(null);

    const onSubmit = data => {
        setUserInfo(data);   
    }

    const handlePayment = (paymentId) => {
        const bookingDetails = {
            user : userInfo,
            payment: paymentId
        }
        console.log(bookingDetails);
    }

    return (
        <div className="book">
            <div className="form-container mt-5">
                <form className="col-lg-6" onSubmit={handleSubmit(onSubmit)} style={{display: userInfo ?"none":"block"}}>
                    <div className="form-group ">
                        <input type="text" {...register("name")} className="form-control border-0" id="name" name="name" aria-describedby="Name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" {...register("email")} className="form-control border-0" name="email" id="email" placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                        <select {...register("service")} className="form-control border-0" name="service" id="service" required>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-cstm">Submit</button>
                    
                </form>
                <div style={{display: userInfo ?"block":"none"}}>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm handlePayment={handlePayment}></CheckoutForm>
                    </Elements>
                </div>
                
            </div>
        </div>
    );
};

export default Book;