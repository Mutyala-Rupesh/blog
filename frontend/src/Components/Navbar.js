import { useState } from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function Navbar(props){
    const [input,setInput] = useState('')

    const handleSearch = async(event)=>{
        event.preventDefault()
    }



    return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/"><a class="navbar-brand" href="#">Blogging Website</a></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/profile/id"><a class="nav-link" href="#">My Profile</a></Link>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Disabled</a>
                    </li> */}
                    </ul>
                    <form onSubmit={handleSearch} class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" onChange={(e) => setInput(e.target.value)} type="search" placeholder="Search" aria-label="Search"></input>
                        <Link to={`/search/${input}`}><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
                    </form>
                </div>
            </nav>
    )
}

export default Navbar;