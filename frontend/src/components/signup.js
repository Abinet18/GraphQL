import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
class signup extends Component {
  render(){
    return <div className="loginInput">
      <div><span>Full name</span><span><input type="text"s value=""></input></span></div>
      <div><span>Username</span><span><input type="text" value=""></input></span></div>
      <div><span>Password</span><span><input type="text"s value=""></input></span></div>
      <div><span>Email</span><span><input type="text"s value=""></input></span></div>
      <div><span></span><span><button className="primary">Signup</button></span></div>
    </div>
  }
}
export default signup;
