import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faListAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    return (
        <div className="sidebar pt-4 col-lg-2">
            <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faBookmark} color="dodgerblue" /> Book</li>
                <li><FontAwesomeIcon icon={faListAlt} color="dodgerblue" /> Booking List</li>
                <li><FontAwesomeIcon icon={faCommentDots} color="dodgerblue" /> Review</li>
            </ul>
        </div>
    );
};

export default Sidebar;