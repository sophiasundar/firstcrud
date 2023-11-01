import React from 'react';
import { useParams } from 'react-router-dom';
import MainUser from './MainUser';

export function UserDetails({user}){
    const {id} = useParams();
    const person = user[id];

    return(
    <MainUser  
        title = {"User details"}
        styles = "title">
     <div className = "user-content">
                <div className="user-card">
                <h1>Name:{person.name}</h1>
                <h4>id:{person.id}</h4>
                <p>Batch:{person.batch}</p>
                <p>Email:{person.email}</p>
                <p>Exp:{person.experience}</p>
        </div>
     </div>
      
    </MainUser>
    )
}