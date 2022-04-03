import React from "react";
import {useState} from "react";
import {CognitoUserAttribute, CognitoUserPool} from "amazon-cognito-identity-js";
import {useNavigate} from 'react-router-dom';
import poolData from "./PoolData";



function SignUp(){
    const navigate = useNavigate();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[mobileNumber,setMobileNumber] = useState("");
    const userPool = new CognitoUserPool(poolData);



    const onSubmit = (event)=>{
        event.preventDefault();
        //referenced from https://www.youtube.com/watch?v=Yp5sZd7ZyCI
        const attributeList = [
            new CognitoUserAttribute({
                Name: 'phone_number',
                Value: mobileNumber,
            }),
        ];

        navigate("/authenticate",{state:{email:email}})

        userPool.signUp(email,password,attributeList,null,(err,data) =>{
            if(err){
                if(err.code==='UsernameExistsException'){
                    navigate("/login")
                }
            }
            else {
                navigate("/authenticate",{state:{email}})
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

                <label htmlFor="mobileNumber">Mobile Number</label>
                <input value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}></input>

                <button type="submit">Signup</button>
            </form>
        </div>
    )
}
export default SignUp;