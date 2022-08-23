import { useEffect, useState } from "react"
import axios from "axios"
import './AddBlog.css'

const AddBlog = (props) => {
    const [title,setTitle] = useState('')
    const [des,setDes] = useState('')
    const [short_des,setShort_des] = useState('')
    const [blog_image,setBlog_image] = useState('')


    async function handleSubmit(event){
        event.preventDefault()
        await axios.post(`http://127.0.0.1:3000/addblog/${props.username}`, {
            "username": props.username,
            "title": title,
            "blog_d": des,
            "short_des":short_des,
            "blog_image":blog_image
        })
        window.location.reload()
        props.setAdd(false)
    }
    function closeHandle(){
        props.setAdd(false)
    }

    return(
        <form className="add-blog-form" onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input maxLength={80} type="text" onChange={(e) => setTitle(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title"></input>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Image URL</label>
                <input type="string" onChange={(e) => setBlog_image(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Image URL"></input>
            </div>
            <div class="form-group">
                <label for="exampleInputDes1">Short Description</label>
                <input maxLength={400} type="text" onChange={(e) => setShort_des(e.target.value)} rows="4" class="form-control" id="exampleInputPassword1" placeholder="Enter Short Description"></input>
            </div>
            <div class="form-group">
                <label for="exampleInputDes1">Description</label>
                <textarea type="text" onChange={(e) => setDes(e.target.value)} rows="4" class="form-control" id="exampleInputPassword1" placeholder="Enter Description"></textarea>
            </div>
            <div className="buttons">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button onClick={(e)=>closeHandle()} class="btn btn-secondary">close</button>
            </div>
        </form>
    )
}

export default AddBlog