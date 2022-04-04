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
            <label htmlFor="code" className={"fw-bold"}>Enter one time password received on {userEmail} </label>
            <input className={"form-control"} required={true} value={code} onChange={(event)=>setCode(event.target.value)}></input>
                <br/>
                <button type="submit" className={"btn btn-primary mr-3"}>Submit</button>
            </form>
        </div>
    );
}

export default Authentication;