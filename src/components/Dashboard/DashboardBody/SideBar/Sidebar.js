import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faListAlt, faCommentDots, faThList, faPlus, faTh, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../Context/AuthContext';


const Sidebar = ({handleDashboard}) => {

    const {loggedInUser} = useAuth()

    return (
        <div className="sidebar pt-4 col-lg-2">
            <ul className="list-unstyled">
                {
                    loggedInUser.isAdmin === true &&
                    <>
                        <Link to="/book"><li><FontAwesomeIcon icon={faBookmark} color="dodgerblue" /> Book</li></Link>
                        <Link to="/bookingList"><li><FontAwesomeIcon icon={faListAlt} color="dodgerblue" /> Booking List</li></Link>
                        <Link to="/review"><li><FontAwesomeIcon icon={faCommentDots} color="dodgerblue" /> Review</li></Link>
                        <Link to="/orderList"><li><FontAwesomeIcon icon={faThList} color="dodgerblue" /> Order List</li></Link>
                        <Link to="/addService"><li><FontAwesomeIcon icon={faPlus} color="dodgerblue" /> Add Service</li></Link>
                        <Link to="/makeAdmin"><li><FontAwesomeIcon icon={faUserPlus} color="dodgerblue" /> Make Admin</li></Link>
                        <Link to="/manageServices"><li><FontAwesomeIcon icon={faTh} color="dodgerblue" /> Manage Services</li></Link>
                    </>
                }
                {
                    loggedInUser.isAdmin === false &&
                    <>
                        <Link to="/book"><li><FontAwesomeIcon icon={faBookmark} color="dodgerblue" /> Book</li></Link>
                        <Link to="/bookingList"><li><FontAwesomeIcon icon={faListAlt} color="dodgerblue" /> Booking List</li></Link>
                        <Link to="/review"><li><FontAwesomeIcon icon={faCommentDots} color="dodgerblue" /> Review</li></Link>
                    </>
                }
                
            </ul>
        </div>
    );
};

export default Sidebar;