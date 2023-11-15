import React from 'react'
import { useState } from 'react';
const LoginPage = () => {
  const [loginData,setLoginData]=useState({
    username:"",
    password:""
  });
  function getInput(event){
    
    let newLoginData=loginData;
    newLoginData[event.target.name]=event.target.value;
    console.log(newLoginData);
  }
  return (
    <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/fit%20stats.jpg?itok=nfF02G2C"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="form-outline mb-4">
            <input type="text" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter your username" onInput={getInput}  name='username'/>
            <label className="form-label" htmlFor="form3Example3">Username</label>
          </div>

          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" onInput={getInput} name='password'/>
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>


          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"
              style={{paddingLeft: 2.5 + "rem", paddingRight: 2.5 + "rem"}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0 text-primary">Don't have an account? <a href="#!"
                className="link-success">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
 
    

</section>
  )
}

export default LoginPage