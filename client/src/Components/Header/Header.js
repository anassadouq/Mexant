import React from "react";
import { Link} from 'react-router-dom';

export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <img src="./images/logo.png" className="mx-5" width="150px"/>
                </Link>
                    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="mx-2 nav-link text-dark" href="/Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-2 nav-link text-dark" href="/Home">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-2 nav-link text-dark" href="/Home">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="mx-2 nav-link text-dark" href="/Home">Pages</a>
                        </li>
                    </ul>
                    <Link to="/Admin">
                        <button className="btn btn-success" type="submit">Admin Page</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}