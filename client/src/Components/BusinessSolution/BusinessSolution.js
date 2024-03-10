import React from "react";
import './BusinessSolution.css';

export default function BusinessSolution(){
    return(
        <div className="my-5 row" id="BusinessSolution">
            <div className="col-7">
                <h2 className="mx-5 my-5 text-light" style={{"fontWeight":"bold"}}>
                    <span>Business </span> 
                    <span className="text-success">Solutions</span> and <br/>
                    <span style={{"color":"#FF4500"}}> Crypto</span> Investments
                </h2>
            </div>
            <div className="buttons my-5 col-4">
                <div className="btn btn-success">
                    <a href="/" className='text-light my-5'>Discover More</a>
                </div>
                <div className="btn orange-button">
                    <a href="/create" className='text-light my-2'>Contact Us</a>
                </div>
            </div>
        </div>
    )
}