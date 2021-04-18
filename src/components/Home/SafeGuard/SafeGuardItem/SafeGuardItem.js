import React from 'react';
import './SafeGuardItem.css';

const SafeGueardItem = ({img, title}) => {
    return (
        <div className="col-md-4 safe-guard-item">
            <div className="card mt-4 border-0 shadow-sm">
                <img className="card-img-top" src={img} alt=""/>
                <h5 className="mt-3">{title}</h5>
                <div className="card-body">
                    <p className="card-text">Lorem Ipsum sodales orci. Class aptent taciti conubia sociosqu ad litora.</p>
                </div>
            </div>
        </div>
    );
};

export default SafeGueardItem;