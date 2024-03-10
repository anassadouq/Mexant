import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { AccountService } from "../../Authentification/AccountService";
import { HiOutlineLogout } from "react-icons/hi";

export default function Header({ email }) {
    const navigate = useNavigate();

    const logout = () => {
        AccountService.logout();
        navigate('/login');
    }

    // Check if the email is equal to "admin@gmail.com"
    const isAdmin = email === "admin@gmail.com";

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="./images/logo.png" className="mx-5" width="120px" alt="Logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="mx-2 nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="mx-2 nav-link text-dark" to="/">Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="mx-2 nav-link text-dark" to="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="mx-2 nav-link text-dark" to="/">Pages</Link>
                        </li>
                    </ul>
                    {isAdmin && (
                        <Link to="/Admin">
                            <button className="btn mx-2" type="submit"><FaUserAlt /> Admin</button>
                        </Link>
                    )}
                    <button className='btn btn-dark mx-2' onClick={logout}><HiOutlineLogout style={{"fontSize":"20px"}}/> Logout</button>
                </div>
            </div>
        </nav>
    )
}
