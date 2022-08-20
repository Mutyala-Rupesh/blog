import React, { useState,useEffect } from "react";
import './Profile.css';
import Navbar from './Navbar';
import BlogListUser from "./BlogListUser";
import pic from './image.jpg';

function Profile() {

    const [userinfo,setUserinfo] = useState('')

    const getuserinfo = async () => {
		const url = "http://127.0.0.1:3000/user/rupesh";
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
        <Navbar/>
            <div className="container mt-5 mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4 col-lg-4"><img src={pic}></img></div>
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
                    <BlogListUser/>
                </div>
        </div>
  );
};
  
export default Profile;