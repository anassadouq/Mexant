import React from "react";
import { Link} from 'react-router-dom';

export default function Header(){
    return(
        <div className="container">
            <Link class="navbar-brand" to="/">
                <img src="./images/logo.png" width="150px"/>    
            </Link>    
        </div>
    )
}