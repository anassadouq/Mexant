import React from "react";
import { Link} from 'react-router-dom';
export default function Header(){
    return(
        <div className="container">
            <Link class="navbar-brand" to="/">
                <img src="./images/freedom.png" width="100px"/>    
            </Link>    
        </div>
    )
}