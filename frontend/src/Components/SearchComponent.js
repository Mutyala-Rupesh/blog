import { useState ,useEffect} from "react"
import { useParams } from "react-router-dom";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './SearchComponent.css'
import backicon from './back-icon.png'
import Navbar3 from "./Navbar3";

function SearchComponent(){
    const [blogsbySearch,setBlogsbySearch] = useState([])

    const {input} = useParams();
    const {username} = useParams();

    const getBlogsbysearch = async()=>{
        const url = `http://127.0.0.1:3000/show/${input}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson) {
            setBlogsbySearch(responseJson);
        }
        console.log(responseJson)

    }

    useEffect(() => {
		getBlogsbysearch();
	},[]);


    return(
    <>
        {/* <Navbar/> */}
        <Navbar3 username={username}/>
        <a href={`/${username}`}><img className="back-icon" src={backicon} alt="" /></a>
        {blogsbySearch.map((blog, index) => (
            <div className='blog-item-search'>
                <div className="blog-item-content">
                <div className='blog-item-header-search'>
                    <p className="title">Title: {blog.title}</p>   
                </div>
                {/* <hr /> */}
                <div className='des-div-search'>
                    <p className='des'>{blog.short_des}</p>
                </div>
                <div className='blog-item-footer-search'>
                    <p className="author_name-search">author_name: {blog.authorID}</p>
                    <p>Posted:{blog.created_at}</p>
                    {/* <div className='button-div'><Link to={`/edit/${blog.id}`}><button className='button' variant="primary">Edit</button></Link></div> */}
                    <div className='button-div-search'><Link to={`/shows/${blog.id}`}><button className='button-search' variant="primary">More</button></Link></div>
                </div>
                </div>
            </div>
        ))}
    </>
    )
}

export default SearchComponent