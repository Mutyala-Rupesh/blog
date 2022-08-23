import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './Editprofile.css';
import axios from "axios";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function Editprofile() {
    let {username} = useParams();
    const [userinfo,setUserinfo] = useState([])
    const [age,setAge] = useState('')
    const [description,setDescription] = useState('')

    const getuserinfo = async () => {
		const url = `http://127.0.0.1:3000/user/${username}`;
		const response = await fetch(url);
		const responseJson = await response.json();
        console.log(responseJson)

		if (responseJson) {
			setUserinfo(responseJson);
		}
    }
    const handleSubmit = async(event) =>{
        event.preventDefault()
        await axios.put(`http://127.0.0.1:3000/adduser/${username}`, {
            "username":username,
            "age": age,
            "description": description,
            "image":"https://th.bing.com/th/id/OIP.scExuNqSeL_zvoAQbH0gWAHaHa?w=207&h=207&c=7&r=0&o=5&pid=1.7"
        })
        console.log("sucess")
	};

    const handleDelete = async(event)=>{
        event.preventDefault()
        await axios.delete(`http://127.0.0.1:3000/adduser/${username}`)
    }

    useEffect(() => {
		getuserinfo();
	},[]);

  return (
    <div class="container rounded bg-white mt-5">
        <div class="row">
            <div class="col-md-4 border-right">
                <div id="editprof" class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src={userinfo.image} width="90"></img><span class="font-weight-bold">{userinfo.first_name}</span><span class="text-black">{userinfo.email}</span>
                <div>
                    <p class="mb-0"><a href="/login" class="text-black-50 fw-bold">Edit photo</a></p>
                </div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div class="col-md-8">
                <div class="p-3 py-5" id="profdetails">
                    <div class="d-flex justify-content-between align-items-center mb-3" >
                        <div class="d-flex flex-row align-items-center back"><i class="fa fa-long-arrow-left mr-1 mb-1"></i>
                            <a href={`/profile/${username}`}><h6>Back to profile</h6></a>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="First name" value={`${userinfo.first_name}`} readonly="readonly"></input></div>
                        {/* <div class="col-md-6"><input type="text" class="form-control" value="Bagde" placeholder="Last name" readonly="readonly"></input></div> */}
                    </div>
                    <div class="row mt-3">
                    <div class="col-md-6"><input type="text" class="form-control" placeholder="New username" value={`${userinfo.username}`} readonly="readonly"></input></div>
                        <div class="col-md-6"><input type="number" onChange={(e)=>{setAge(e.target.value)}} class="form-control" placeholder="Age"></input></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><input type="email" class="form-control" placeholder="Email" value={`${userinfo.email}`} readOnly="readonly"></input></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><input onChange={(e)=>{setDescription(e.target.value)}} type="text" class="form-control" placeholder="Description" ></input></div>
                    </div>
                    <div className="editprofilebuttons">
                    <div class="mt-5 left text-right"><button class="btn btn-primary profile-button" type="submit">Save Profile</button></div>
                    <div class="mt-5 text-right"><Link to={`/profile/${username}`}><button class="btn btn-primary profile-button">Back</button></Link></div>
                    </div>
                </div>

                <div id="deleteaccount">
                    
                    <p class="mb-0">Not enjoying our blogs? <a onClick={handleDelete} href="/login" class="text-black-50 fw-bold">Delete account</a></p>
                </div>
            </div>
            </form>
        </div>
    </div>
  );
};
  
export default Editprofile;