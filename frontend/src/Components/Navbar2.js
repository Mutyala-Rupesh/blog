import { useState } from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import axios from 'axios';

function Navbar2(props){
    const [input2,setInput2] = useState('')
    // const [username,setUsername] = useState('')
    function handleSearch2(){
        window.location.reload()
    }
    const handleNavbar=(event)=>{
        event.preventDefault()
    }

    const handleLogout= ()=>{
        console.log("logged out")
        axios.delete("http://127.0.0.1:3000/logout")
        
    }



    return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a onClick={handleNavbar} class="navbar-brand" href="">Blogging Website</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/"><a onClick={()=>handleLogout} class="nav-link" href="#">Log Out</a></Link>
                    </li>
                    </ul>
                    <form onSubmit={handleSearch2} class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" onChange={(e) => setInput2(e.target.value)} type="search" placeholder="Search" aria-label="Search"></input>
                        <Link to={`/search/${props.username}/${input2}`}><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
                    </form>
                </div>
            </nav>
    )
}

export default Navbar2;