import React from 'react';
import quote from '../../../img/quote.png';
import TestimonialItem from './TestimonialItem/TestimonialItem';
import './Testmonials.css';

const testimonials = [
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: "Jonty rodes"
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: "Shuilid "
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: "Jackson"
    },
    {
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name: "Hankar Mahmbu"
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials bg-light mt-5 pt-5 pb-5">
            <h3 className="text-center section-title">OUR TESTIMONIALS</h3>
            <div className="text-center quote-img">
                <img src={quote} style={{'height': '100px'}} alt=""/>
            </div>
            
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {
                        testimonials.map((test,index) => <li data-target="#carouselExampleIndicators" data-slide-to={`${index}`} className={`${index===0?"active":""}`}></li>)
                    }
                </ol>
                <div className="carousel-inner p-5 row justify-content-center">
                    {
                        testimonials.map((testimonial,index) => <TestimonialItem testimonial={testimonial} index={index}></TestimonialItem>)
                    }
                </div>
                
            </div>
        </section>
    );
};

export default Testimonials;