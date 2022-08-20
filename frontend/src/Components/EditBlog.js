import { useState } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios"
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function EditBlog(props){

    const [title,setTitle] = useState('')
    const [des,setDes] = useState('')
    const {id} = useParams();

    async function handleEdit(event){
        event.preventDefault()
        await axios.put(`http://127.0.0.1:3000/editblog/rupesh/${id}`, {
            "title": title,
            "blog_d": des
        })
        const title_input=document.getElementById("edittile")
        title_input.value=''
        const des_input=document.getElementById("editdes")
        des_input.value=''
        console.log(title)
    }

    return(
    <form onSubmit={handleEdit}>
        <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} class="form-control" id="edittile" aria-describedby="emailHelp" placeholder="Enter Title"></input>
        </div>
        <div class="form-group">
            <label for="exampleInputDes1">Description</label>
            <input type="text" onChange={(e) => setDes(e.target.value)} class="form-control" id="editdes" placeholder="Enter Description"></input>
        </div>
        <div className="buttons">
            <button type="submit" class="btn btn-primary">Submit</button>
            <Link to="/"><button class="btn btn-secondary">close</button></Link>
        </div>
    </form>
    )
}
export default EditBlog