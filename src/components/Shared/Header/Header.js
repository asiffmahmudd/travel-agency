import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { signOut } from '../../../firebaseManager';
import logo from '../../../img/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faListAlt, faChevronDown, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [loggedInUser,setloggedInUser] = useContext(UserContext);

    const handleLogOut = () =>{
        signOut()
        .then(data => {
            if(data){
                setloggedInUser({})
            }
        })
    }

    return (
        <header className="bg-light">
            <div className ="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} style={{'height':'65px'}} alt=""/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Services</Link>
                            </li>
                            {
                                loggedInUser?.email &&
                                <>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <img className="dropdown-toggle ml-4" alt="" style={{height:'45px', cursor: "pointer"}} src={loggedInUser.photo}  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                            <FontAwesomeIcon className="ml-1 dropdown-toggle" style={{cursor: "pointer"}} data-toggle="dropdown"icon={faChevronDown} />
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                                <span className="dropdown-item"><FontAwesomeIcon icon={faUser} color="dodgerblue" /> {loggedInUser.name}</span>
                                                <span className="dropdown-item"><FontAwesomeIcon icon={faEnvelope} color="dodgerblue" /> {loggedInUser.email}</span>

                                                <Link className="dropdown-item" to="/dashboard"><FontAwesomeIcon icon={faListAlt} color="dodgerblue" /> Dashboard</Link>
                                                <span className="dropdown-item" onClick={handleLogOut}><FontAwesomeIcon icon={faSignOutAlt} color="dodgerblue" /> Logout</span>
                                            </div>
                                        </div>
                                    </li>
                                </>
                            }
                            {
                                !loggedInUser?.email &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            <button className="btn btn-cstm">Login</button>
                                        </Link>
                                    </li>
                                </>
                            }
                            
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;