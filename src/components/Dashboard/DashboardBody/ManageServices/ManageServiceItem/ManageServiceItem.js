import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './ManageServiceItem.css';

const ManageServiceItem = ({service}) => {
    const {img, desc, title} = service;
    return (
        <div className="manage-services-item col-lg-3 shadow-sm bg-white border-0 m-3 p-3">
            <img src={img} alt=""/>
            <h6 className="mt-3">{title}</h6>
            <p>{desc}</p>
            <span className="delete mr-3"><FontAwesomeIcon icon={faTrashAlt} color="firebrick" /></span>
            <span className="edit"><FontAwesomeIcon icon={faEdit} color="forestgreen"/></span>
        </div>
    );
};

export default ManageServiceItem;