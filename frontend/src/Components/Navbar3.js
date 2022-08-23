import { useState } from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function Navbar2(props){
    const [input2,setInput2] = useState('')
    // const [username,setUsername] = useState('')
    function handleSearch2(){
        window.location.reload()
    }
    const handleNavbar=(event)=>{
        setTimeout(event.preventDefault(),1000)
        
    }



    return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a onClick={handleNavbar} class="navbar-brand" href="">Blogging Website</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
    )
}

export default Navbar2;