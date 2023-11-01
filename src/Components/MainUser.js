import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function MainUser({title,styles,children}){
    const navigate = useNavigate();
      return( 
        <div>
          <div className = "nav">
          <span>
             <button
             onClick={()=>navigate("/add/user")}>Add user
             </button>
         </span>
         <span>
             <button
              onClick={()=>navigate("/")}>Dashboard
             </button>
         </span>
         
        </div>
        <div className={styles}>{title}</div>
        <div className="children">{children}</div>
      </div>
      )
}