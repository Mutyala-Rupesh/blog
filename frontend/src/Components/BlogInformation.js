import { useParams } from "react-router-dom"
import pic from './image.jpg'
import './BlogInformation.css'
import Navbar from './Navbar';
import { useState,useEffect } from "react";

function BlogInformation(){
    const [bloginfo,setBloginfo] = useState('')
    const {blogid}=useParams();

    const getBlogs = async () => {
		const url = `http://127.0.0.1:3000/shows/${blogid}`;
		const response = await fetch(url);
		const responseJson = await response.json();
        console.log(responseJson)

		if (responseJson) {
			setBloginfo(responseJson);
		}
        console.log(bloginfo)
	};

    useEffect(() => {
		getBlogs();
	},[]);




    return(
        <div>
        <Navbar/>
        <div>
            <div className="title"><h1>{bloginfo.title}</h1></div>
            <div className="blog_matter">
                <div className="item-img-div"><img className="item-img" src={pic} alt="" /></div>
                <div className="blog-matter-right">
                    <p className="word">Author Name : {bloginfo.author}</p>
                    <p className="word">Description : {bloginfo.blog_d}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BlogInformation