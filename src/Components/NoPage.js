import React from "react"
import { useNavigate } from "react-router-dom"

export function NoPage(){
    const navigate = useNavigate()
    return(
        <div>
            <h1>Go to Dashboard</h1>
            <button
            onClick={()=>navigate.push("/")}>
              Dashboard
            </button>
        </div>
    )
}