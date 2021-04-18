import React from 'react';
import './Review.css';
import { useForm } from "react-hook-form";

const Review = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="review">
            <div className="form-container mt-5">
                <form className="col-lg-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group ">
                        <input type="text" {...register("name")} className="form-control border-0" id="name" name="name" aria-describedby="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="text" {...register("companyName")} className="form-control border-0" name="companyName" id="companyName" placeholder="Company Name/ Designation" />
                    </div>
                    <div className="form-group">
                        <textarea type="text" {...register("desc")} className="form-control border-0" name="desc" id="desc" placeholder="Description" style={{'height': '150px'}} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Review;