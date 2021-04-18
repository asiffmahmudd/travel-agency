import React from 'react';
import img1 from '../../../img/safeguard-business.jpg';
import img2 from '../../../img/safeguard-family.jpg';
import img3 from '../../../img/safeguard-student.jpg';
import SafeGuardItem from './SafeGuardItem/SafeGuardItem';

const SafeGuard = () => {

    return (
        <section className="safe-guard mt-5 mb-5">
            <div className="container">
                <div className="row text-center">
                    <h3 className="col-md-12 text-center section-title">SAFEGUARD TRAVEL</h3>
                    <SafeGuardItem img={img1} title="Business"></SafeGuardItem>
                    <SafeGuardItem img={img2} title="Family"></SafeGuardItem>
                    <SafeGuardItem img={img3} title="Student"></SafeGuardItem>
                </div>
            </div>
        </section>
    );
};

export default SafeGuard;