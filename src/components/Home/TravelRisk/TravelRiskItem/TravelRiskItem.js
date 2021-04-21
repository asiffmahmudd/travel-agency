import React from 'react';
import './TravelRiskItem.css';

const TravelRiskItem = ({img,title}) => {
    return (
        <div className="travel-risk-item">
            <div className="col-md-12 text-right">
                <div className="travel-risk-img text-right">
                    <img src={img} alt=""/>
                </div>
                <h5>{title}</h5>
                <p>Integer et dapibus nibh. Vestibulum ante ipsum primis faucibus orci.</p>
            </div>
        </div>
    );
};

export default TravelRiskItem;