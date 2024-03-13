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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a href="#home" className="navbar-brand">
                    <img src="./images/logo.png" className="mx-5" width="100px" alt="Logo" />
                </a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#home" className="mx-2 nav-link text-light">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="mx-2 nav-link text-light">Servives</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="mx-2 nav-link text-light">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/create" className="mx-2 nav-link text-light">Contact Us</a>
                        </li>
                    </ul>
                    <div className="">
                        <ul className="navbar-nav me-auto">
                            
                        </ul>

                        {AccountService.isLogged() ? (
                            <form className="d-flex">
                                <button className='btn btn-light mx-2' onClick={logout}><MdLogout/> Logout</button>
                            </form>
                        ) : null}
                    </div>
                </div>
            </div>
        </nav>
    )
}