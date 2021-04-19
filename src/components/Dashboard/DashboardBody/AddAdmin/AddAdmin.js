import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddAdmin.css';

const AddAdmin = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        console.log(data);
    };

    return (
        <div className="add-admin">
            <div className="form-container mt-5">
                <form className="col-lg-6 bg-white p-5 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email" className="font-weight-bold d-block">Email</label>
                    <div className="input-container">
                        
                        <input type="email" {...register("email")} className="form-control mr-3" id="email" name="email" aria-describedby="Email" placeholder="Enter Email" required />
                        <button type="submit" className="btn btn-cstm float-right">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;