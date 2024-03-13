import React from "react";
import { FaCloud } from "react-icons/fa";
import { GiPowerLightning } from "react-icons/gi";
import { FaPuzzlePiece } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";

export default function Services(){
    return(
        <section className="services my-5">
            <br/>
            <a name="services"> </a>  
            <div className="mx-5 my-5">
                <div className="row">
                    <div className="col-lg-5 btn btn-light my-4 mx-5">
                        <div className="row">
                            <i className="col-2"><FaCloud style={{"fontSize":"75px"}} className="text-success"/></i>
                            <div className="col-9">
                                <h4 style={{"fontWeight":"bold"}}>CSS Templates</h4>
                                <p>TemplateMo website is the best for you to explore and download free website templates.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 btn btn-light my-4 mx-5 ">
                        <div className="row">
                            <i className="col-2"><GiPowerLightning style={{"fontSize":"75px"}} className="text-success"/></i>
                            <div className="col-9">
                                <h4 style={{"fontWeight":"bold"}}>HTML5 Web Pages</h4>
                                <p>Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 btn btn-light my-4 mx-5 ">
                        <div className="row">
                            <i className="col-2"><FaPuzzlePiece style={{"fontSize":"75px"}} className="text-success"/></i>
                            <div className="col-9">
                                <h4 style={{"fontWeight":"bold"}}>Responsive Designs</h4>
                                <p>All of our CSS templates are 100% free to use for commercial or business websites.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 btn btn-light my-4 mx-5 ">
                        <div className="row">
                            <i className="col-2"><FaMobileScreen style={{"fontSize":"75px"}} className="text-success"/></i>
                            <div className="col-9">
                                <h4 style={{"fontWeight":"bold"}}>Mobile and Tablet ready!</h4>
                                <p>Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 btn btn-light my-4 mx-5 ">
                        <div className="row">
                            <i className="col-2"><MdDesignServices style={{"fontSize":"75px"}} className="text-success"/></i>
                            <div className="col-9">
                                <h4 style={{"fontWeight":"bold"}}>Fast Customer Support</h4>
                                <p>Do not be hesitated to contact us if you have any question or concern about our templates.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 btn btn-light my-4 mx-5 ">
                        <div className="row">
                            <i className="col-2"><FaDatabase style={{"fontSize":"75px"}} className="text-success"/></i>
                            <div className="col-9">
                                <h4 style={{"fontWeight":"bold"}}>Fully Customizable</h4>
                                <p>If you have any idea or suggestion about new templates, feel free to let us know.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}