import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios"
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function EditBlog(props){
    let navigate=useNavigate();
    const [title,setTitle] = useState('')
    const [des,setDes] = useState('')
    const [blog_image,setBlog_image] = useState('')
    const [short_des,setShort_des] = useState('')
    const {id} = useParams();
    const {username}  = useParams();
    const [editbloginfo,setEditbloginfo] = useState([])


    async function handleEdit(event){
        event.preventDefault()
        const url = `http://127.0.0.1:3000/shows/${id}`;
		const response = await fetch(url);
		const responseJson = await response.json();
        console.log(responseJson)

		if (responseJson) {
			setEditbloginfo(responseJson);
            console.log(responseJson)
            const title_input=document.getElementById("edittile")
            title_input.value=`${responseJson.title}`
            const short_des_input=document.getElementById("editshort_des")
            short_des_input.value=`${responseJson.short_des}`
            const des_input=document.getElementById("editdes")
            des_input.value=`${responseJson.blog_d}`
            const imageurl=document.getElementById("editimage")
            imageurl.value=`${responseJson.blog_image}`
		}


        
        await axios.put(`http://127.0.0.1:3000/editblog/${username}/${id}`, {
            "title": title,
            "blog_d": des,
            "short_des":short_des,
            "blog_image":blog_image
        })
        // const title_input=document.getElementById("edittile")
        // title_input.value=''
        // const des_input=document.getElementById("editdes")
        // des_input.value=''
        navigate(-1)

        console.log(title)
    }

    return(
    <form onSubmit={handleEdit}>
        <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" maxLength={80} onChange={(e) => setTitle(e.target.value)} class="form-control" id="edittile" aria-describedby="emailHelp" placeholder={editbloginfo.title}></input>
        </div>
        <div class="form-group">
            <label for="exampleInputDes1">Short Description</label>
            <input maxLength={400} type="text" onChange={(e) => setShort_des(e.target.value)} class="form-control" id="editshort_des" placeholder={editbloginfo.short_des}></input>
        </div>
        <div class="form-group">
            <label for="exampleInputDes1">Description</label>
            <textarea type="text" onChange={(e) => setDes(e.target.value)} class="form-control" id="editdes" placeholder={editbloginfo.blog_d}></textarea>
        </div>
        <div class="form-group">
            <label for="exampleInputDes1">Image URL</label>
            <input type="string" onChange={(e) => setBlog_image(e.target.value)} class="form-control" id="editimage" placeholder={editbloginfo.blog_image}></input>
        </div>
        <div className="buttons">
            <button type="submit" class="btn btn-primary">Submit</button>
            <Link to={`/${username}`}><button class="btn btn-secondary">close</button></Link>
        </div>
    </form>
    )
}
export default EditBlog