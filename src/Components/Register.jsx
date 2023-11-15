import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [registerData,setRegisterData]=useState({
        username:"",
        password:"",
        email:"",
      });
      let navigate=useNavigate();
      function getInput(event){
        
        let newRegisterData=registerData;
        newRegisterData[event.target.name]=event.target.value;
        console.log(newRegisterData);
        setRegisterData(newRegisterData);
      }
      function handleRegister(event){
        event.preventDefault();
        axios.post("api/register",registerData).then((response)=>{
          console.log(response.data);
          navigate("/login");
        }).catch((err)=>{
          console.log(err);
        });
    
      }
  return (
    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src="https://t3.ftcdn.net/jpg/04/29/35/62/360_F_429356296_CVQ5LkC6Pl55kUNLqLisVKgTw9vjyif1.jpg"
            className="img-fluid" alt="Sample image"/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={handleRegister}>
            <div className="form-outline mb-4">
              <input type="text" id="form3Example34" className="form-control form-control-lg"
                placeholder="Enter your username" onInput={getInput}  name='username'/>
              <label className="form-label" htmlFor="form3Example3">Username</label>
            </div>
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter your email" onInput={getInput}  name='email'/>
              <label className="form-label" htmlFor="form3Example3">Email</label>
            </div>
  
            <div className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg"
                placeholder="Enter password" onInput={getInput} name='password'/>
              <label className="form-label" htmlFor="form3Example4">Password</label>
            </div>
  
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="submit" className="btn btn-primary btn-lg"
                style={{paddingLeft: 2.5 + "rem", paddingRight: 2.5 + "rem"}}>Register</button>
            </div>
  
          </form>
        </div>
      </div>
    </div>
   
      
  
  </section>
  )
}

export default Register