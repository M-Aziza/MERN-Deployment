import React from "react";
import { useState , useEffect } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";


const List=()=>{  
    const [pets,setPets]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                setPets(res.data);
            })
            .catch(err => console.error(err));
    },[pets]);



    return(
        <div className="container mt-4 border border-2 shadow border-secondary rounded p-4 ">
            <div className='d-flex justify-content-between'>
            <h1 className='text-center'>Pet Shelter</h1>
            <Link className="text-muted " to="/addnew"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            Add a pet to the shelter 
            </Link>
            </div>
            <h3>These pets are looking for a good home</h3>
            <div className="m-4 p-4">
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet,i)=>
                    <tr key={i}>
                        <td >{pet.name}</td>
                        <td >{pet.type}</td>
                        <td>
                            <Link to={"/pet/"+pet._id} className="btn btn-outline-dark mx-4" >Edit</Link>
                            <Link to={"/view/"+pet._id} className="btn btn-outline-dark mx-4" > Details </Link>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
            </div>
        </div>
    )

}

export default List;