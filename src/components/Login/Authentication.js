import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import {CognitoUser, CognitoUserPool} from "amazon-cognito-identity-js";
import poolData from "./PoolData";
import {useNavigate} from 'react-router-dom';


function Authentication() {
    const navigate = useNavigate();
    const location = useLocation();
    const[code,setCode] = useState("");
    const userEmail = location.state.email;
    const userPool = new CognitoUserPool(poolData);

    const user = new CognitoUser({
        Username:userEmail,
        Pool:userPool
    })

    const onSubmit = (event)=> {
        event.preventDefault();
        user.confirmRegistration(code,true,(err,res)=>{
            if(err){
                console.log(err)
            }
            else{console.log((res))
            navigate("/login")}
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
            <label htmlFor="code">Enter code</label>
            <input value={code} onChange={(event)=>setCode(event.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Authentication;