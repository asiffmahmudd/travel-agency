import React, { useState } from 'react';
import './OrderListItem.css';

const OrderListItem = ({order}) => {
    const {name, email, service, pay, status} = order;

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
    }

    

    return (
        <tr className="order-list-item">
            <td>{name}</td>
            <td>{email}</td>
            <td>{service}</td>
            <td>{pay}</td>
            <td>
                <select name="service" onChange={handleChange} value={selectStatus} id="service" style={{color:fontColor}}>
                    <option value="done" className="done" value="done">Done</option>
                    <option value="pending" className="pending" value="pending">Pending</option>
                    <option value="Don-going" className="on-going" value="on-going">On-Going</option>
                </select>
            </td>
        </tr>
    );
};

export default OrderListItem;