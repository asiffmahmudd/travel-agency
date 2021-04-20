import React, { useEffect, useState } from 'react';
import './ManageService.css';
import ManageServiceItem from './ManageServiceItem/ManageServiceItem';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import Sidebar from '../SideBar/Sidebar';




const ManageService = () => {

    const [services, setServices] = useState([]);
    const [change, setChange] = useState(false);

    useEffect(() => {
        document.getElementById("loading").style.display = 'block';
        fetch('https://travel-agencyy.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            document.getElementById("loading").style.display = 'none';
            setServices(data);
        })
    },[change])

    return (
        <>
        <DashboardHeader></DashboardHeader>
        <div className="dashboard-body">
            <div className="row">
                <Sidebar></Sidebar>
                
                <div className="dashboard-content col-lg-10">
                    <div id="manage-services">
                        <div className="text-center mt-3 mb-3" id="loading" style={{display:'none'}}>
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {
                                    services.length == 0 &&
                                    <h1 className="col-md-12 text-center">No services found</h1>
                                }
                                {
                                    services.map(service => <ManageServiceItem setChange={setChange} key={service._id} id={service._id} service={service.service}></ManageServiceItem>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ManageService;