import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './ManageServiceItem.css';

const ManageServiceItem = ({service, id, setChange}) => {
    const {image, desc, title} = service;

    const handleDelete = (id) => {
        setChange(false);
        document.getElementById("loading").style.display = 'block';
        fetch('https://travel-agencyy.herokuapp.com/deleteService/'+id,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                document.getElementById("loading").style.display = 'none';
                alert("Service deleted successfully");
                setChange(true);
            }
        })
    }

    return (
        <div className="manage-services-item col-lg-3 shadow-sm bg-white border-0 m-3 p-3">
            <img src={image} alt=""/>
            <h6 className="mt-3">{title}</h6>
            <p>{desc}</p>
            <span onClick={() => handleDelete(id)} className="delete mr-3"><FontAwesomeIcon icon={faTrashAlt} color="firebrick" /></span>
            <span className="edit"><FontAwesomeIcon icon={faEdit} color="forestgreen"/></span>
        </div>
    );
};

export default ManageServiceItem;