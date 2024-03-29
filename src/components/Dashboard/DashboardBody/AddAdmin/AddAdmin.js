import React from 'react';
import { useForm } from "react-hook-form";
import { serverUrl } from '../../../../ServerUrl';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import Sidebar from '../SideBar/Sidebar';
import './AddAdmin.css';

const AddAdmin = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data =>{
        document.getElementById("loading").style.display = 'block';
        fetch(serverUrl+"/addAdmin/"+data.email)
        .then(res => res.json())
        .then(data => {
            if(data){
                document.getElementById("loading").style.display = 'none';
                alert("Admin added successfully");
                reset();
            }
        })
    };

    return (
        <>
        <DashboardHeader title="Add Admin"></DashboardHeader>
        <div className="dashboard-body">
            <div className="row">
                <Sidebar></Sidebar>
                
                <div className="dashboard-content col-lg-10">
                    <div id="make-admin">
                        <div className="form-container mt-5">
                            <form className="col-lg-12 bg-white p-5 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="email" className="font-weight-bold d-block">Email</label>
                                <div className="col-lg-5 input-container" style={{padding:0}}>
                                    
                                    <input type="email" {...register("email")} className="form-control mr-3" id="email" name="email" aria-describedby="Email" placeholder="Enter Email" required />
                                    <button type="submit" className="btn btn-cstm float-right">Submit</button>
                                </div>
                                
                            </form>
                            <div className="text-center mt-3 mb-3" id="loading" style={{display:'none'}}>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AddAdmin;