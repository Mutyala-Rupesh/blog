import React, { Component } from "react";
import './Signup.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Signup=() =>{
    let navigate=useNavigate();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [first_name,setFirst_name] = useState('')
    const [age,setAge] = useState(0)
    const [username,setUsername] = useState('')
    const [description,setDescription] = useState('')
    
    async function handleSubmit(event) {
      event.preventDefault();

    await axios.post("http://localhost:3000/registrations",
    {
        email: email,
        password: password,
        first_name:first_name,
        age:age,
        username:username,
        description:description
    }).then(response => {
      if (response.data.status === "created") {
        navigate("../login")
      }
  }).catch(error => {
    console.log("registration error", error);
  });
}

    return (
      <section className="text-center text-lg-start">
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card cascading-right" id="same">
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <form onSubmit={handleSubmit}>           
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input onChange={(e) => setFirst_name(e.target.value)} type="text" id="form3Example1" className="form-control" placeholder="First name" />
                        </div>
                      </div>
                    </div>
      
                    <div className="form-outline mb-4">
                      <input onChange={(e) => setAge(e.target.value)} type="number" id="form3Example3" className="form-control" placeholder="Age"/>
                    </div>
      
                    <div className="form-outline mb-4">
                      <input onChange={(e) => setUsername(e.target.value)} type="text" id="form3Example3" className="form-control" placeholder="Pick a username"/>
                    </div>
      
                    <div className="form-outline mb-4">
                      <input onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example3" className="form-control" placeholder="Email address"/>
                    </div>
      
                    
                    <div className="form-outline mb-4">
                      <input onChange={(e) => setPassword(e.target.value)} type="password" id="form3Example4" className="form-control" placeholder="Password"/>
                    </div>
      
                    <div className="form-outline mb-4">
                      <input onChange={(e) => setDescription(e.target.value)} type="text" id="form3Example3" className="form-control" placeholder="Describe youself!"/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
      
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img src="https://psrihospital.com/wp-content/uploads/2021/04/blog.jpg" className="w-100 rounded-4 shadow-4"
                alt="" />
            </div>
          </div>
        </div>
      </section>
        );
    }
  
export default Signup;