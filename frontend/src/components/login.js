import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
class login extends Component {
  render(){
    return <div className="loginInput">
      <div><span>Username</span><span><input type="text" value=""></input></span></div>
      <div><span>Password</span><span><input type="text"s value=""></input></span></div>
      <div><span></span><span><button className="primary">Login</button></span></div>
    </div>
  }
}
export default login;
