import { useState,useEffect } from 'react';
import './BlogList.css'
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './EditBlog.css'

function BlogList(props){
    // let blogs = [{"id":3,"title":"Blog-1","des":"This is blog-1","author_name":"rupesh"},{"id":3,"title":"Blog-1","des":"This is blog-1","author_name":"rupesh"}]
    const [blogs,setBlogs] = useState([])
    const [blogsbyuser,setBlogsbyuser] = useState([])

    const getBlogs = async () => {
		const url = "http://127.0.0.1:3000/showall";
		const response = await fetch(url);
		const responseJson = await response.json();
        console.log(responseJson)

		if (responseJson) {
			setBlogs(responseJson);
		}
	};

    useEffect(() => {
		getBlogs();
	},[]);





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
		// LongText();
	},[]);






	return (
		<>
			{blogs.map((blog, index) => (
				<div className='blog-item'>
                    <div className='blog-item-header'>
                        <p className="title">Title: {blog.title}</p>   
                    </div>
                    {/* <hr /> */}
					<div className='des-div'>
                        <p className='short_des'>{blog.short_des}  ...</p>
                    </div>
                    {/* <div className='des-div'>
                        <p className='des'>{blog.blog_d}</p>
                    </div> */}
                    <div className='blog-item-footer'>
                        <p className="author_name">Author Name: {blog.authorID} </p>
                        <p>Posted: {(blog.created_at).slice(0,10)}</p>
                        {/* <div className='button-div'><Link to={`/edit/${blog.id}`}><button className='button' variant="primary">Edit</button></Link></div> */}
                        <div className='button-div'><Link to={`/shows/${blog.id}`}><button className='button' variant="primary">More</button></Link></div>
                    </div>
				</div>
			))}
		</>
	);
}

export default BlogList;





