import { useEffect, useState } from "react"
import axios from "axios"
import './AddBlog.css'

const AddBlog = (props) => {
    const [title,setTitle] = useState('')
    const [des,setDes] = useState('')


    async function handleSubmit(event){
        event.preventDefault()
        await axios.post(`http://127.0.0.1:3000/addblog/${props.username}`, {
            "username": props.username,
            "title": title,
            "blog_d": des
        })
        window.location.reload()
        props.setAdd(false)
    }
    function closeHandle(){
        props.setAdd(false)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title"></input>
            </div>
            <div class="form-group">
                <label for="exampleInputDes1">Description</label>
                <input type="text" onChange={(e) => setDes(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Enter Description"></input>
            </div>
            <div className="buttons">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button onClick={(e)=>closeHandle()} class="btn btn-secondary">close</button>
            </div>
        </form>
    )
}

export default AddBlog