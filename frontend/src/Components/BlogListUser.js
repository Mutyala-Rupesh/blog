import { useState,useEffect } from 'react';
import './BlogList.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './EditBlog.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function BlogListUser(props){
    let navigate = useNavigate();
    // let blogs = [{"id":3,"title":"Blog-1","des":"This is blog-1","author_name":"rupesh"},{"id":3,"title":"Blog-1","des":"This is blog-1","author_name":"rupesh"}]
    const [blogsbyuser,setBlogsbyuser] = useState([])


    const getBlogsbyuser = async () => {
		const url = "http://127.0.0.1:3000/user/bloglist/rupesh";
		const response = await fetch(url);
		const responseJson = await response.json();
        console.log(responseJson)

		if (responseJson) {
			setBlogsbyuser(responseJson);
		}
	};

    useEffect(() => {
		getBlogsbyuser();
	},[]);


    const handleDelete = async (id) => {
        axios.delete(`http://127.0.0.1:3000/delblog/rupesh/${id}`)
        window.location.reload()
    }
    



	return (
		<>
			{blogsbyuser.map((blog) => (
				<div className='blog-item'>
                    <div className='blog-item-header'>
                        <p className="title">Title: {blog.title}</p>   
                    </div>
                    {/* <hr /> */}
                    <div className='des-div'>
                        <p className='des'>{blog.blog_d}</p>  
                    </div>
                    <div className='blog-item-footer'>
                        <p className="author_name">author_name: {blog.authorID}</p>
                        <p>Posted : {blog.created_at}</p>
                        <div className='button-div'><Link to={`/edit/${blog.id}`}><button className='button' variant="primary">Edit</button></Link></div>
                        <div className='button-div'><button onClick={()=> {handleDelete(blog.id)}} className='button' variant="primary">Delete</button></div>
                        <div className='button-div'><Link to={`/shows/${blog.id}`}><button className='button' variant="primary">More</button></Link></div>
                    </div>
				</div>
			))}
		</>
	);
}

export default BlogListUser;

