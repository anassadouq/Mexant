import React from "react";

export default function About(){
    return(
        <div>
            <a name="about"> </a>  
            <center>
                <b style={{"color":"#FF4500"}} className="my-5"><br/><br/>ABOUT US</b>
                <h1 style={{"fontWeight":"bold"}}>Know Us Better</h1>
            </center>

            <div className="row">
                <div className="col-8 mx-4">
                    <table className="my-3" width="90%" height="100%">
                        <thead>
                            <th>Project Title</th>
                            <th>Budget</th>
                            <th>Deadline</th>
                            <th>Client</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-success" style={{"fontWeight":"bold"}}>Website Redesign</td>
                                <td>$1,500 to $2,200</td>
                                <td>2022 Dec 12</td>
                                <td>Web Biz</td>
                            </tr>
                            <tr>
                                <td className="text-success" style={{"fontWeight":"bold"}}>Website Renovation</td>
                                <td>$2,500 to $3,600</td>
                                <td>2022 Dec 10</td>
                                <td>Online Ads</td>
                            </tr>
                            <tr>
                                <td className="text-success" style={{"fontWeight":"bold"}}>Marketing Plan</td>
                                <td>$2,500 to $4,200</td>
                                <td>2022 Dec 8</td>
                                <td>Web Biz</td>
                            </tr>
                            <tr>
                                <td className="text-success" style={{"fontWeight":"bold"}}>All-new Website</td>
                                <td>$3,000 to $6,600</td>
                                <td>2022 Dec 2</td>
                                <td>Web Presence</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-3">
                    <h5 style={{"fontWeight":"bold"}}>Please tell us about your idea and how you want it to be</h5>
                    <p>You are allowed to use this template for your websites. You are <span style={{"fontWeight":"bold"}}>NOT allowed </span>to redistribute the template ZIP file on any other template websites.</p>
                    <p>Thank you for downloading and using our templates. Please tell your friends about our website.</p>
                    <button className="btn btn-success my-2">Discover More</button>
                </div>
            </div>
        </div>
    )
}