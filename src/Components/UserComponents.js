import React from 'react';
import { useNavigate } from 'react-router-dom'
import MainUser from './MainUser';

export default function UserComponent({user,setUser}){
    
    const navigate = useNavigate();  //DELETE USER
    const deleteUser=(idx)=>{
        const alterList =user.filter((per)=>per.id!==idx)
        setUser(alterList)

    }

    return (
        <MainUser
        title ="User Details"    //User Details
        styles="title">
         <div className="user-content">
           
         {user.map((person,idx)=>(
            <div key={idx} className="user-card">
                
                <h1>{person.name}</h1>
                <h4>id:{person.id}</h4>
                <p>Batch:{person.batch}</p>
                <p>Email:{person.email}</p>
                <p>Exp:{person.experience}</p>
                
                <div className="btn-group">
                    <button
                    onClick={()=>navigate(`/edit/${person.id}`)}
                    className="btn-one">Edit</button>
                    <button 
                    onClick={()=>navigate(`/user/${idx}`)}
                    className="view-btn">View</button>
                    <button className="btn"
                    onClick={()=>deleteUser(person.id)}
                    >Delete</button>
                    </div>
               </div>
             ))}
          </div>
        </MainUser>
        )
    }