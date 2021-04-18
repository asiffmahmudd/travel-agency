import React from 'react';
import './TravelRiskItem.css';

const TravelRiskItem = ({img,title}) => {
    return (
        <div className="travel-risk-item">
            <div className="col-md-12 text-right">
                <img src={img} alt=""/>
                <h5>{title}</h5>
                <p>Integer et dapibus nibh. Vestibulum ante ipsum primis faucibus orci.</p>
            </div>
        </div>
    );
};

export default TravelRiskItem;