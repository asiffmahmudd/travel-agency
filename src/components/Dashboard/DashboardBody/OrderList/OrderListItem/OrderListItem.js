import React, { useState } from 'react';
import './OrderListItem.css';

const OrderListItem = ({order, id}) => {
    const {name, email, service} = order.booking.user;
    const status = order.booking.status;

    let color = "";
    if(status=== "done"){
        color = "forestgreen";
    }
    else if(status === "pending"){
        color = "firebrick";
    }
    else{
        color = "goldenrod";
    }

    const [fontColor, setFontColor] = useState(color);
    const [selectStatus, setSelectStatus] = useState(status);

    

    const handleChange = (event) => {
        setSelectStatus(event.target.value);
        if(event.target.value=== "done"){
            setFontColor("forestgreen");
        }
        else if(event.target.value === "pending"){
            setFontColor("firebrick");
        }
        else{
            setFontColor("goldenrod");
        }

        const orderStatus ={
            status: event.target.value
        }
        document.getElementById("loading").style.display = 'block';
        fetch('https://travel-agencyy.herokuapp.com/modifyBookingStatus/'+id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderStatus)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                document.getElementById("loading").style.display = 'none';
            }
        })
    }

    

    return (
        <>
        <tr className="order-list-item">
            <td>{name}</td>
            <td>{email}</td>
            <td>{service}</td>
            <td>Paid</td>
            <td>
                <select name="service" onChange={handleChange} value={selectStatus} id="service" style={{color:fontColor}}>
                    <option className="done" value="done">Done</option>
                    <option className="pending" value="pending">Pending</option>
                    <option className="on-going" value="on-going">On-Going</option>
                </select>
            </td>
        </tr>
        </>
    );
};

export default OrderListItem;