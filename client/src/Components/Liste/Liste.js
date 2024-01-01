import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import './App.css';

export default function Liste() {
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
        <Link class="mx-5 my-3 btn btn-warning" to="/Create"><IoIosAddCircleOutline/> Create</Link>
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
                    <Link className="btn btn-secondary" to={`/Update/${row.id}`}><FaRegEdit/> Edit</Link>
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