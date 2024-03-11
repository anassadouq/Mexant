import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AccountService } from "../../Authentification/AccountService";
import { MdLogout } from "react-icons/md";

export default function Header() {
    const navigate = useNavigate();

    const logout = () => {
        AccountService.logout();
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="./images/logo.png" className="mx-5" width="120px" alt="Logo" />
                </Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="mx-2 nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="mx-2 nav-link text-dark" to="/">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="mx-2 nav-link text-dark" to="/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="mx-2 nav-link text-dark" to="/">Pages</Link>
                        </li>
                    </ul>
                    <div className="">
                        <ul className="navbar-nav me-auto">
                            
                        </ul>

                        <form className="d-flex">
                            <button className='btn btn-dark mx-2' onClick={logout}><MdLogout/> Logout</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}