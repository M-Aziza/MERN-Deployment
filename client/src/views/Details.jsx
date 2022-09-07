
import {Link,useParams,useHistory } from 'react-router-dom'
import {useState , useEffect} from 'react'
import axios from 'axios'


const Details = (props) => {
    const [pet, setPet] = useState({}) 
    const history = useHistory()
    const {id} = useParams()

    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/"+id)
        .then(res => setPet(res.data))
        .catch(err => console.error(err))
    },[id])

        const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/api/delete/"+id)
        .then(res => history.push("/"))
        .catch(err => console.error(err))
    }

    return (
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

        <hr />
            <div className='text-center '>
            <span className='p-2 me-2 fs-3' >Details About :</span> 
            <span className=' me-2 fs-3 fw-light' >{pet.name} </span>
            </div>
            <div className='d-flex justify-content-between'>
            </div>

            <div className='d-flex justify-content-around border border-4 m-4 p-4 rounded border-light' >

                <div className='text-start'>
                        <div class="p-2">
                            <span className=' m-2 fs-3'>Pet Type:</span>
                            <span  className=' m-2 fs-3 fw-light'>{pet.type}</span>                            
                        </div>
                        <div class="p-2">
                            
                            <span className=' m-2 fs-3'> Description:</span>
                            <span className=' m-2 fs-3 fw-light'>{pet.description}</span>
                        </div>

                        </div>
                        <div className="vr"></div>
                        <div class="text-start">
                            

                            <span className='fs-3 ' >Skills:</span>
                            <ul >
                            <li class="list-group-item">
                                {pet.skill1}
                            </li>
                            <li class="list-group-item">
                                {pet.skill2}
                            </li>
                            <li class="list-group-item">
                                {pet.skill3}
                            </li>
                            </ul>
                        </div>
            </div>
                        <button onClick={()=>{handleDelete(pet._id)}} class="btn btn-outline-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-heart-fill me-2 mb-1" viewBox="0 0 16 16">
                    <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z"></path>
                    <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"></path>
                </svg>
                Adopt {pet.name}
            </button>
            </div>
    )
}



export default Details