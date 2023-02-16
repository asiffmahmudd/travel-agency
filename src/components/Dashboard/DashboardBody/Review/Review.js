import React from 'react';
import './Review.css';
import { useForm } from "react-hook-form";
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import Sidebar from '../SideBar/Sidebar';
import { useAuth } from '../../../../Context/AuthContext';
import { serverUrl } from '../../../../ServerUrl';

const Review = () => {

    const {loggedInUser} = useAuth()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        document.getElementById('loading').style.display = 'block';
        fetch(serverUrl+'/addTestimonials',{
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
        <>
        <DashboardHeader title="Review"></DashboardHeader>
        <div className="dashboard-body">
            <div className="row">
                <Sidebar></Sidebar>
                
                <div className="dashboard-content col-lg-10">
                    <div id="review">
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
                </div>
            </div>
        </div>
        </>
    );
};

export default Review;