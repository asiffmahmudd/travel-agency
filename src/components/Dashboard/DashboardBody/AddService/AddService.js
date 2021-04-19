import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const [fileError, setFileError] = useState(false);

    const onSubmit = data =>{
        if(data.photo[0].type === "image/jpeg" || data.photo[0].type === "image/png"){
            setFileError(false);
            const imageData = new FormData();
            imageData.set('key', '0c9c52f3c2c70e376333024c7dd177e2');
            imageData.append('image', data.photo[0]);

            document.getElementById('loading').style.display = 'block';

            fetch('https://api.imgbb.com/1/upload', {
                method: 'POST',
                body: imageData
            })
            .then(response => response.json())
            .then(result => {
                const service = {
                    title : data.title,
                    price: data.price,
                    desc : data.desc,
                    image : result.data.display_url
                }
                submitData(service);
            })
            .catch(error => {
                alert(error)
            })
        }
        else{
            setFileError(true);
        }
        
    };

    const submitData = (service) => {
        fetch('http://localhost:4000/addService', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                document.getElementById("loading").style.display = 'none';
                alert("Service added successfully");
                reset();
            }
        })
    }

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
                        <div className="form-group col-lg-6">
                            <label htmlFor="price">Price</label>
                            <input type="number" {...register("price")} className="form-control" name="price" id="price" placeholder="Price" required/>
                        </div>
                        <div className="form-group col-lg-6">
                            <label htmlFor="desc">Description</label>
                            <textarea type="text" {...register("desc")} className="form-control" name="desc" id="desc" placeholder="Description" style={{'height': '150px'}} required/>
                        </div>
                        <div className="form-group file-upload col-lg-6">
                            <label htmlFor="photo" className="d-block">Upload an Image</label>
                            <input type="file" {...register("photo")} className="form-control" name="photo" id="photo" required/>
                            <span className="upload-btn" onClick={handleClick}><FontAwesomeIcon icon={faUpload} color="dodgerblue"/> Upload Image</span>
                            {fileError && <span className="error">Please upload a jpeg or png file</span>}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-cstm mt-2 float-right">Submit</button>
                    <div className="text-center mt-3 mb-3" id="loading" style={{display:'none'}}>
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;