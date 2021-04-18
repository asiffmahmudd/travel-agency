import React from 'react';
import person from '../../../img/travel-risk-person.png';
import TravelRiskItem from './TravelRiskItem/TravelRiskItem';
import img1 from '../../../img/travel-risk-1.png';
import img2 from '../../../img/travel-risk-2.png';
import img3 from '../../../img/travel-risk-3.png';

const TravelRisk = () => {
    return (
        <section className="travel-risk bg-light mt-5 mb-5">
            <div className="container">
                <div className="row text-center mt-5">
                    <h3 className="text-center col-md-12 mt-5 section-title">WE COVER TRAVEL RISKS</h3>
                    <div className="col-md-4 offset-md-2 mt-5">
                        <TravelRiskItem img={img1} title="MEDICAL"></TravelRiskItem>
                        <TravelRiskItem img={img2} title="TRIP"></TravelRiskItem>
                        <TravelRiskItem img={img3} title="IMMIGRANT"></TravelRiskItem>
                    </div>
                    <div className="col-md-6 mt-5">
                        <img src={person} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelRisk;