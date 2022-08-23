import { useParams,useNavigate } from "react-router-dom"
import pic from './image.jpeg'
import backicon from './back-icon.png'
import './BlogInformation.css'
import Navbar3 from './Navbar3';
import { useState,useEffect } from "react";

function BlogInformation(props){
    const [bloginfo,setBloginfo] = useState('')
    const {blogid}=useParams();
    const navigate = useNavigate();

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
        <Navbar3/>
        <img className="back-icon-2" onClick={()=>navigate(-1)} src={backicon} alt="" />
        <div className="info_matter">
            <div className="title-1"><h1>{bloginfo.title}</h1></div>
            <div className="blog_matter">
                <div className="item-img-div"><img className="item-img-1" src={bloginfo.blog_image} alt="" /></div>
                <div className="blog-matter-right">
                    <p className="word"><b>Author Name : </b>{bloginfo.author}</p>
                    <p className="info_des word"><b>Description : </b>{bloginfo.blog_d}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BlogInformation