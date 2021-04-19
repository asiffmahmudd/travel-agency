import React, { useContext } from 'react';
import './Review.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';

const Review = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        document.getElementById('loading').style.display = 'block';
        fetch('http://localhost:4000/addTestimonials',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                document.getElementById('loading').style.display = 'none';
                alert("Review added successfully");
                reset()
            }
        })
    };

    return (
        <div className="review">
            <div className="form-container mt-5">
                <form className="col-lg-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group ">
                        <input type="text" {...register("name")} className="form-control border-0" id="name" name="name" aria-describedby="name" defaultValue={loggedInUser.name} readOnly placeholder="Your Name" required />
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
            <div className="text-center mt-3 mb-3" id="loading" style={{display:'none'}}>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Review;