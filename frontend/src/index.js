import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BlogInformation from './Components/BlogInformation';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import EditBlog from './Components/EditBlog';
import Profile from './Components/Profile';
import SearchComponet from './Components/SearchComponent'
import Signup from './Components/Signup';
import Login from './Components/Login';
import Editprofile from './Components/Editprofile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/:username' element={<App />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/shows/:blogid' element={<BlogInformation />}></Route>
    <Route path='/edit/:id/:username' element={<EditBlog/>}></Route>
    <Route path='/profile/:username' element={<Profile/>}></Route>
    <Route path='/search/:username/:input' element={<SearchComponet/>}></Route>
    <Route path='/editprofile/:username' element={<Editprofile/>}></Route>
  </Routes>
</Router>
);