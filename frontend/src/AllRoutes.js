import { Component } from "react"
import BlogInformation from './Components/BlogInformation';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import EditBlog from './Components/EditBlog';
import Profile from './Components/Profile';
import SearchComponet from './Components/SearchComponent'
import Home from './Home';
import axios from "axios";

export default class AllRoutes extends Component{
    constructor() {
        super();
    
        this.state = {
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        };
    
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
      }
    
      checkLoginStatus() {
        axios
          .get("http://localhost:3001/logged_in", { withCredentials: true })
          .then(response => {
            if (
              response.data.logged_in &&
              this.state.loggedInStatus === "NOT_LOGGED_IN"
            ) {
              this.setState({
                loggedInStatus: "LOGGED_IN",
                user: response.data.user
              });
            } else if (
              !response.data.logged_in &
              (this.state.loggedInStatus === "LOGGED_IN")
            ) {
              this.setState({
                loggedInStatus: "NOT_LOGGED_IN",
                user: {}
              });
            }
          })
          .catch(error => {
            console.log("check login error", error);
          });
      }
    
      componentDidMount() {
        this.checkLoginStatus();
      }
    
      handleLogout() {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        });
      }
    
      handleLogin(data) {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: data.user
        });
      }




    render(){
        return(
            <Router>
                <Routes>
                    <Route
                    exact
                    path={"/"}
                    render={props => (
                        <Home
                        {...props}
                        handleLogin={this.handleLogin}
                        handleLogout={this.handleLogout}
                        loggedInStatus={this.state.loggedInStatus}
                        />
                    )}
                    />
                    <Route path='/shows/:blogid' element={<BlogInformation />}></Route>
                    <Route path='/edit/:id' element={<EditBlog/>}></Route>
                    <Route path='/profile/:id' element={<Profile/>}></Route>
                    <Route path='/search/:input' element={<SearchComponet/>}></Route>
                </Routes>
            </Router>
        )
    }
}


