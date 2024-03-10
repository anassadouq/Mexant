import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Create.css';

export default function Create(){
    const navigate = useNavigate();
    
    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [adresse, setAdresse] = useState('')

    const createProduct = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('adresse', adresse)


        console.log(formData)
        await axios.post('http://127.0.0.1:8000/api/freedoms', formData)
        .then(({data})=>{
            console.log(data.message)
            navigate('/')
        }).catch(({response})=>{
            if (response.status ==422) {
                console.log(response.data.errors)
            } else {
                console.log(response.data.message)
            }
        })
    }

    return(
        <section className="calculator">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                    </div>
                    <div className="col-lg-5">
                        <div className="section-heading">
                            <h6>Your Freedom</h6>
                            <h4>Get a Financial Plan</h4>
                        </div>
                        <form id="calculate" action="" method="get" onSubmit={createProduct}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <fieldset>
                                        <label for="name">Your Name</label>
                                        <input type="name" name="name" id="name" placeholder="" autocomplete="on" required 
                                                value={name}
                                                onChange={(e)=>{setName(e.target.value)}}
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-6">
                                    <fieldset>
                                        <label for="email">Your Email</label>
                                        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="" required=""
                                                value={email}
                                                onChange={(e)=>{setEmail(e.target.value)}}/>
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                        <label for="subject">Your Phone</label>
                                        <input type="text" name="subject" id="subject" placeholder="" autocomplete="on" 
                                                value={phone}
                                                onChange={(e)=>{setPhone(e.target.value)}}/>
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                        <label for="chooseOption" className="form-label">Your Message</label>
                                        <input type="subject" name="adresse" 
                                                value={adresse}
                                                onChange={(e)=>{setAdresse(e.target.value)}}/>
                                    </fieldset>
                                </div>
                                <div className="col-lg-12">
                                    <fieldset>
                                            <button type="submit" id="form-submit" className="orange-button">Submit Now</button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>   
    )
}