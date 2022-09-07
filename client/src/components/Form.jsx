import React, { useState } from 'react'
import axios from 'axios';
import { useHistory ,Link } from 'react-router-dom'

const Form=()=>{
    
    const history = useHistory()

    const [name,setName]=useState("")
    const [type,setType]=useState("")
    const [description,setDescription]=useState("")
    const [skill1,setSkill1]=useState("")
    const [skill2,setSkill2]=useState("")
    const [skill3,setSkill3]=useState("")



    const [errors, setErrors] = useState([]);


    const [nameError, setNameError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");


    const onSubmitHandler = e => {
        e.preventDefault(); //prevent default behavior of the submit
        axios.post('http://localhost:8000/api/pet/new', { //make a post request to create a new product 
        name,
        type,
        description,
        skill1,
        skill2,
        skill3
        })
        .then(res =>
            history.push("/"))
        .catch(err => {
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }


    const handleName = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 1) {
            setNameError("Name is required!");
        }
        else {
            setNameError("")
        }
    }

    const handleType = (e) => {
        setType(e.target.value);
        if (e.target.value.length < 1) {
            setTypeError("Type is required");
        }
        else {
            setTypeError("")
        }
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
        if (e.target.value.length < 1) {
            setDescriptionError("Description is required");
        }
        else {
            setDescriptionError("")
        }
    }


    return(
        <div className="container mt-4 border border-2 shadow border-secondary rounded p-4">
            <div className='d-flex justify-content-between'>
            <h1 className='text-center'>Pet Shelter</h1>
            <Link to="/">  <button type="button" class="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"></path>
                    </svg>
            </button></Link>    
            </div>
            <h3>Know a pet needing a home ? </h3>
            <div className=" mt-4  ">
            <div className=" p-4 border border-1 rounded border-secondary">
            {errors.map((error, i) => <p className='text-danger' key={i}>{error}</p>)}
            <form className="m-4 p-4" onSubmit={onSubmitHandler}> 
            <div className='d-flex p-6 justify-content-evenly' >
            <div>
            <h5 className='m-2 text-start'>Pet Information</h5>
            <hr />
                <div className='m-2 text-start'>
                <span className='p-2 m-2' > Pet Name: </span>
                    <input type="text" className="form-control" onChange={handleName}  />
                    <p className='text-danger'>{nameError}</p>
                </div>

                <div className='m-2 text-start'>
                    <span className='p-2 m-2' > Pet Type:</span> 
                    <input type="text" className="form-control"  onChange={handleType} />
                    <p className='text-danger'>{typeError}</p>
                </div>

                <div className='m-2 text-start'>
                <span className='p-2 m-2' > Pet Description: </span>
                    <input type="text" className="form-control"  onChange={handleDescription} />
                    <p className='text-danger'>{descriptionError}</p>
                </div>
            </div>
            <div>
                <h5 className='m-2 text-start'>Skills (Optional)</h5>
                <hr />
                <div className='m-2 text-start'>
                <span className='p-2 m-2 ' >Skill1 : </span>
                <input type="text" className="form-control"  onChange={(e)=>setSkill1(e.target.value)} />
                </div>
                <div className='m-2 text-start'>
                <span className='p-2 m-2' >Skill2 : </span>
                <input type="text" className="form-control"  onChange={(e)=>setSkill2(e.target.value)} />
                </div>
                <div className='m-2 text-start'>
                <span className='p-2 m-2' >Skill2 : </span>
                <input type="text" className="form-control"  onChange={(e)=>setSkill3(e.target.value)} />
                </div>
            </div>
                </div>
                <input type="submit" className="btn btn-outline-dark mx-4 m-4 pe-4 ps-4" value="Add Pet" />
            </form>
            </div>
            </div>
        </div>
    )
}

export default Form;