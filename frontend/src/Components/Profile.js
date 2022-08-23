import React, { useState,useEffect } from "react";
import './Profile.css';
import BlogListUser from "./BlogListUser";
import pic from './image.jpg';
import { useParams } from "react-router-dom";
import backicon from "./back-icon.png"
import Navbar2 from "./Navbar2";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


function Profile() {

    const [userinfo,setUserinfo] = useState('')

    let {username} = useParams();
    console.log(username)

    const getuserinfo = async () => {
		const url = `http://127.0.0.1:3000/user/${username}`;
		const response = await fetch(url);
		const responseJson = await response.json();
        console.log(responseJson)

		if (responseJson) {
			setUserinfo(responseJson);
		}
	};

    useEffect(() => {
		getuserinfo();
	},[]);

    console.log(userinfo)




  return (
    <div>
        {/* <Navbar /> */}
        <Navbar2 username={username}/>
        <a href={`/${username}`}><img className="icon" src={backicon} alt="" /></a>
            <div className="container mt-5 mb-5">
                    <div className="row no-gutters">
                        <div>
                        <div className="col-md-4 col-lg-4"><img className="profile-photo" src={userinfo.image }></img></div>
                        <Link to={`/editprofile/${username}`}><button className="edit-button">Edit Profile</button></Link>
                        </div>
                        <div className="col-md-8 col-lg-8">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                                    <h3 className="display-5">Name: {userinfo.first_name}</h3><i className="fa fa-facebook"></i><i className="fa fa-google"></i><i className="fa fa-youtube-play"></i><i className="fa fa-dribbble"></i><i className="fa fa-linkedin"></i></div>
                                    <div className="p-1 bg-white">
                                </div>
                                <div className="p-3 bg-black text-white">
                                    <h6>Username: {userinfo.username}</h6>
                                </div>
                                <div className="p-1 bg-white">
                                </div>
                                <div className="p-3 bg-black text-white">
                                    <h6>Email: {userinfo.email}</h6>
                                </div>
                                <div className="p-1 bg-white">
                                </div>
                                <div className="p-3 bg-black text-white">
                                    <h6>Age: {userinfo.age}</h6>
                                </div>
                                <div className="p-1 bg-white">
                                </div>
                                <div className="p-4 bg-black text-white text-justify">
                                    <h6>Description: {userinfo.description}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-list-user">
                    <BlogListUser username={username}/>
                </div>
        </div>
  );
};
  
export default Profile;