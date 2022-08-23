import './App.css';
import Navbar from './Components/Navbar';
import BlogList from './Components/BlogList';
import AddBlog from './Components/AddBlog'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import EditBlog from './Components/EditBlog';
import { useParams } from 'react-router-dom';

function App(props) {
  let {username} = useParams();
  const [add,setAdd] = useState(false)
  const [editID,setEditId] = useState('')
  return (
    <div className="App">
      <div>
        <Navbar username={username}/>
      </div>
      <div className='bloglist'>
        <BlogList setEditId={setEditId} setAdd={setAdd}/>
        <div className='search'>
          {!add&&<Button onClick={()=>setAdd(true)}>Add</Button>}
          {add&&<AddBlog username={username} setAdd={setAdd}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
