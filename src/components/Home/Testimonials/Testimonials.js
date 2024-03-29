import React, { useEffect, useState } from 'react';
import quote from '../../../img/quote.png';
import { serverUrl } from '../../../ServerUrl';
import TestimonialItem from './TestimonialItem/TestimonialItem';
import './Testmonials.css';


const Testimonials = () => {

    const[testimonials, setTestimonials] = useState([]);
    
    useEffect(() => {
        document.getElementById("loading").style.display = 'block';
        fetch(serverUrl+'/testimonials')
        .then(res => res.json())
        .then(data => {
            setTestimonials(data);
            document.getElementById("loading").style.display = 'none';
        });
    }, [])

    return (
        <section className="testimonials bg-light mt-5 pt-5 pb-5">
            <h3 className="text-center section-title">OUR TESTIMONIALS</h3>
            
            <div className="text-center quote-img">
                <img src={quote} style={{'height': '100px'}} alt=""/>
            </div>
            
            <div className="text-center mt-3 mb-3" id="loading" style={{display:'none'}}>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
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