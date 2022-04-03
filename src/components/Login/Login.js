import React, {useState} from 'react';
import {CognitoUser, AuthenticationDetails, CognitoUserPool} from "amazon-cognito-identity-js";
import poolData from "./PoolData";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const userPool = new CognitoUserPool(poolData);
    const onSubmit = (event)=>{
        event.preventDefault();

        const user = new CognitoUser({
            Username:email,
            Pool:userPool
        })

        const authenticationDetails = new AuthenticationDetails({
            Username:email,
            Password:password
        })
        user.authenticateUser(authenticationDetails,{
           onSuccess:(data) =>{
               console.log("success",data)
               navigate("/issuebook")
           },
            onFailure:(err)=>{
               console.log("failure",err)
            }
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(event)=> setEmail(event.target.value)}></input>

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(event)=>setPassword(event.target.value)}></input>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;