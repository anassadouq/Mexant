import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { AccountService } from "../../Authentification/AccountService";
import { FaUserAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";


import './App.css';

export default function Liste() {
  const navigate = useNavigate();
  const logout = () => {
      AccountService.logout()
      navigate('/')
  }

  const [freedoms, setFreedoms] = useState([])
    useEffect(() => {
      fetchFreedoms();
    },[]
    )
    const fetchFreedoms = async () => {
      await axios.get('http://127.0.0.1:8000/api/freedoms').then(({ data }) => {setFreedoms(data)}) 
    }
    
    const deleteProduct = async (id) => {
      const confirmDelete = window.confirm('Are you sure you want to delete this item?');
      if (confirmDelete) {
        try {
          await axios.delete(`http://127.0.0.1:8000/api/freedoms/${id}`)
            .then(({ data }) => {
              console.log(data.message);
              fetchFreedoms();
            })
            .catch(({ response: { data } }) => {
              console.log(data.message);
            });
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      }
    };
    
    return(
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              <img src="./images/logo.png" className="mx-5" width="120px"/>
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
                <button className="btn mx-2" type="submit"><FaUserAlt/> Admin</button>
              </Link>
              <button className='btn btn-dark mx-2' onClick={logout}><BiLogOut/></button>
            </div>
          </div>
        </nav>


        <table className="container my-4">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th> 
            <th>Action</th> 
          </tr>
          {
            freedoms.length > 0 && (
              freedoms.map((row,key)=>(
                <tr key={key}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.adresse}</td>
                  <td>
                    <button className="btn btn-danger mx-3" onClick={() => deleteProduct(row.id)}><MdDeleteForever/>Delete</button>
                  </td>       
                </tr>
              ))
            )
          }
        </table>   
      </div>
    )
}