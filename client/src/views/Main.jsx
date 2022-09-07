import React, {useEffect,useState} from "react";
import axios from "axios";
import List from "../components/List";



const Main = () =>{
    const [pets, setPets] = useState([]);

    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/")
        .then(res => setPets(res.data))
        .catch(err => console.error(err))
    },[pets])

    return (
        <div>
            <div className='align-items-center'>
            <List pets={pets}/>
            </div>
        </div>
    )

}
export default Main;
