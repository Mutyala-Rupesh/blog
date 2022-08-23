import React from "react";
import './Login.css';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login=(props)=>{
  let navigate=useNavigate();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    await axios
      .post(
        "http://localhost:3000/sessions",
        {
            email: email,
            password: password
        },
      )
      .then(response => {
        if (response.data.logged_in) {
          console.log("logged in")
          navigate(`../${response.data.username.username}`)
        }
        else{
          alert("Invalid Credentials Error")
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }
    return (
      <div>
      <section className="text-center text-lg-start">
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card cascading-right" id="same">
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Log In</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example3" className="form-control" placeholder="Email"/>
                    </div>
      
                    
                    <div className="form-outline mb-4">
                      <input onChange={(e) => setPassword(e.target.value)} type="password" id="form3Example4" className="form-control" placeholder="Password"/>
                    </div>
      
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Log In
                    </button>
                    <div>
                    <p class="mb-0">Don't have an account? <a href="/Signup" class="text-black-50 fw-bold">Sign Up</a>
                    </p>
                  </div>
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
      </div>
        );
};
  
export default Login;