import React, { useEffect, useState } from 'react';
import quote from '../../../img/quote.png';
import TestimonialItem from './TestimonialItem/TestimonialItem';
import './Testmonials.css';


const Testimonials = () => {

    const[testimonials, setTestimonials] = useState([]);
    
    useEffect(() => {
        fetch('https://travel-agencyy.herokuapp.com/testimonials')
        .then(res => res.json())
        .then(data => {
            setTestimonials(data);
        });
    }, [])

    return (
        <section className="testimonials bg-light mt-5 pt-5 pb-5">
            <h3 className="text-center section-title">OUR TESTIMONIALS</h3>
            <div className="text-center quote-img">
                <img src={quote} style={{'height': '100px'}} alt=""/>
            </div>
            
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {
                        testimonials.map((test,index) => <li key={index} data-target="#carouselExampleIndicators" data-slide-to={`${index}`} className={`${index===0?"active":""}`}></li>)
                    }
                </ol>
                <div className="carousel-inner p-5 row justify-content-center">
                    {
                        testimonials.map((testimonial,index) => <TestimonialItem key={testimonial._id} testimonial={testimonial.review} index={index}></TestimonialItem>)
                    }
                </div>
                
            </div>
        </section>
    );
};

export default Testimonials;