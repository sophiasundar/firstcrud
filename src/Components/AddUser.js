import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainUser from "./MainUser";


export default function AddUser({user,setUser}){
    const navigate = useNavigate();
    const[name,setName] = useState('');
    const[id,setId] = useState('');
    const[email,setEmail] = useState('');
    const[experience,setExperience] = useState('');
    const[batch,setBatch] = useState('');
    

    const addNewUser = ()=>{
        const newUser={
            id,
            name,
            email,
            batch,
            experience
        };
        // console.log(newUser)
        
        setUser([...user, newUser]);
        navigate("/")
        setName("");
        setBatch("");
        setEmail("");
        setExperience("");
        setId("");
    }
    return(
        <MainUser
        title="Add A New Student"
        styles="title">
     
     <div className="input-value">

            <input
             placeholder="id"
             value={id}
             type="text"
             onChange={(e)=>setId(e.target.value)}/>
            
            <input 
            value={name}
            placeholder="name "
            type="text"
            onChange={(e)=>setName(e.target.value)}/>
            
            <input 
            value={email}
            placeholder="email"
            type="text"
            onChange={(e)=>setEmail(e.target.value)}/>
            
           
            <input 
            value={experience}
            placeholder="experience"
            type="number"
            onChange={(e)=>setExperience(e.target.value)}/>
            
            <input 
            value={batch}
            placeholder="batch"
            type="text"
            onChange={(e)=>setBatch(e.target.value)}/>
            
            <button className="add-btn"
            onClick={addNewUser}
            >Add</button>
             
             </div>
     </MainUser>

    )
}