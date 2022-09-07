import React, {useState , useEffect} from "react";
import axios from "axios";
import { useParams ,useHistory ,Link} from "react-router-dom";


const Update =()=>{

    const { id } = useParams();
    const [name,setName]=useState("")
    const [type,setType]=useState("")
    const [description,setDescription]=useState("")
    const [skill1,setSkill1]=useState("")
    const [skill2,setSkill2]=useState("")
    const [skill3,setSkill3]=useState("")

    
    const [errors, setErrors] = useState([]); 
    const history = useHistory();

    const [nameError, setNameError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");




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


    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/"+id)
        .then(res => {
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);

        })
        .catch(err => console.error(err))
    },[id])


    const updatePetHundel = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/' + id, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then(
                res => 
                history.push("/")
            )
            .catch(err => {
                console.log(err.response.data)
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)) {
                    errArr.push(errorObj[key].message)
                }
                setErrors(errArr)
            })

    }

    
    return(

        <div className="container mt-4 border border-2 shadow border-secondary rounded p-4">
            <div className='d-flex justify-content-between'>
            <h1 className='text-center p-2 m-2'>Pet Shelter</h1>
            <Link to="/">  <button type="button" class="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"></path>
                    </svg>
            </button></Link>            
            </div>
            <h3>Edit "  {name} " Information </h3>
            <hr />

        {errors.map((error, i) => <p className='text-danger' key={i}>{error}</p>)}
        <form onSubmit={updatePetHundel}> 
        <div className='d-flex p-6 justify-content-evenly' >
            <div>
            <h5 className='m-2 text-start'>Pet Information</h5>
            <hr />
                <div className='m-2 text-start'>
                <span className='p-2 m-2' > Pet Name: </span>
                    <input type="text" className="form-control" onChange={handleName}  value={name} />
                    <p className='text-danger'>{nameError}</p>
                </div>

                <div className='m-2 text-start'>
                    <span className='p-2 m-2' > Pet Type:</span> 
                    <input type="text" className="form-control"  onChange={handleType} value={type} />
                    <p className='text-danger'>{typeError}</p>
                </div>

                <div className='m-2 text-start'>
                <span className='p-2 m-2' > Pet Description: </span>
                    <input type="text" className="form-control"  onChange={handleDescription}  value={description} />
                    <p className='text-danger'>{descriptionError}</p>
                </div>
            </div>
            <div>
                <h5 className='m-2 text-start'>Skills (Optional)</h5>
                <hr />
                <div className='m-2 text-start'>
                <span className='p-2 m-2 ' >Skill1 : </span>
                <input type="text" className="form-control"  onChange={(e)=>setSkill1(e.target.value)}value={skill1} />
                </div>
                <div className='m-2 text-start'>
                <span className='p-2 m-2' >Skill2 : </span>
                <input type="text" className="form-control"  onChange={(e)=>setSkill2(e.target.value)} value={skill2} />
                </div>
                <div className='m-2 text-start'>
                <span className='p-2 m-2' >Skill2 : </span>
                <input type="text" className="form-control"  onChange={(e)=>setSkill3(e.target.value)} value={skill3} />
                </div>
            </div>
                </div>
            <input type="submit" className="btn btn-outline-dark m-4" value="Edit Pet" />
        </form>
    </div>

    )
}


export  default Update;