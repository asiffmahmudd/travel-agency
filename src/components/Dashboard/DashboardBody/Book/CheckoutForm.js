import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const CheckoutForm = ({handlePayment}) => {

    const [isPaymentLoading, setPaymentLoading] = useState(false);
    const [paymentError, setPaymentError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        setPaymentLoading(true);
        
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            alert('[error]', error);
            setPaymentError(error.message);
            setPaymentLoading(false);
        } 
        else {
            setPaymentError(null);
            // console.log('[PaymentMethod]', paymentMethod);
            handlePayment(paymentMethod.id);
            setPaymentLoading(false);
        }
    };
    return (
        <div style={{padding:'1rem'}}>
            <div style={{maxWidth: "500px"}}>
                <form onSubmit={handleSubmit} style={{display: "block", width: "100%",}}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                        <CardElement className="card"
                            options={{
                                style: {
                                    base: {
                                        backgroundColor: "white"
                                    } 
                                },
                            }}
                        />
                        <button className="pay-button submit btn-cstm btn w-100 mt-3" disabled={isPaymentLoading} >
                            {isPaymentLoading ? "Loading..." : "Pay"}
                        </button>
                    </div>
                    {
                        paymentError &&
                        <span style={{color: 'red'}}>{paymentError}</span>
                    }
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;