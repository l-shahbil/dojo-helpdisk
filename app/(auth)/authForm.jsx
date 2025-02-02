"use client"

import { useState } from "react";


export default function AuthForm({handleSubmit}) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    
    return(
        <form onSubmit={(e) => handleSubmit(e,email,password)}>
            <label>
                <span>Email:</span>
                <input type="text" 
                    required
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
            </label>
            <label>
                <span>Password:</span>
                <input type="password" 
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
            </label>
            <button className="btn-primary">Submit</button>
        </form>
    )
}