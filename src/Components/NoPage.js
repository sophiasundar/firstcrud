import React from "react"
import { useNavigate } from "react-router-dom"

export function NoPage(){
    const navigate = useNavigate()
    return(
        <div>
            <h1 style={{color:"green"}}>Go to Dashboard</h1>
            <button
            onClick={()=>navigate("/")}>
              Dashboard
            </button>
        </div>
    )
}