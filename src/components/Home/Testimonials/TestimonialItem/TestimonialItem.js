import React from 'react';

const TestimonialItem = ({testimonial, index}) => {
    const {desc, name} = testimonial;
    return (
        <div className={`carousel-item text-center mb-4 col-md-6 testmonial-item ${(index===0) ? "active": ""}`}>
            <p>{desc}</p>
            <strong>- {name}</strong>
        </div>
        
    );
};

export default TestimonialItem;