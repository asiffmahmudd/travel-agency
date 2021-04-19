import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

const AddService = () => {

    const { register, handleSubmit } = useForm();
    const [fileError, setFileError] = useState(false);
    const onSubmit = data =>{
        console.log(data.photo[0].type);
        if(data.photo[0].type === "image/jpeg" || data.photo[0].type === "image/png"){
            setFileError(false);
            console.log(data);
        }
        else{
            setFileError(true);
        }
        
    };

    const handleClick = () => {
        document.getElementById("photo").click();
    }

    return (
        <div className="add-service">
            <div className="form-container mt-5">
                <form className="col-lg-12" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row bg-white p-5 rounded">
                        <div className="form-group col-lg-6">
                            <label htmlFor="title">Service Title</label>
                            <input type="text" {...register("title")} className="form-control" id="title" name="title" aria-describedby="name" placeholder="Enter Name" required />
                        </div>
                        <div className="form-group file-upload col-lg-6">
                            <label htmlFor="photo" className="d-block">Upload an Image</label>
                            <input type="file" {...register("photo")} className="form-control" name="photo" id="photo" required/>
                            <span className="upload-btn" onClick={handleClick}><FontAwesomeIcon icon={faUpload} color="dodgerblue"/> Upload Image</span>
                            {fileError && <span className="error">Please upload a jpeg or png file</span>}
                        </div>
                        <div className="form-group col-lg-6">
                            <label htmlFor="desc">Description</label>
                            <textarea type="text" {...register("desc")} className="form-control" name="desc" id="desc" placeholder="Description" style={{'height': '150px'}} required/>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-cstm mt-2 float-right">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;