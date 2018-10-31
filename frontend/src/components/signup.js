import React, {Component} from 'react';
import signupMutation from '../mutations/signupMutation';
import {withRouter} from 'react-router-dom';
import '../App.css';


class signup extends Component {

  state={
    username:"",
    password:"",
    email:"",
    fullname:""
  };
  render(){
    return <div className="loginInput">
      <div><span>Full name</span><span><input type="text" value={this.state.fullname} onChange={(e)=>this.setState({fullname:e.target.value})}></input></span></div>
      <div><span>Username</span><span><input type="text" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}></input></span></div>
      <div><span>Password</span><span><input type="password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}></input></span></div>
      <div><span>Email</span><span><input type="text" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}></input></span></div>
      <div><span></span><span><button className="primary" onClick={this.submit}>Signup</button></span></div>
    </div>
  }
  submit = ()=>
  {
    const {username,password,email,fullname}=this.state;
    console.log("calling signupMutation");
    signupMutation(username,password,email,fullname,this.props.history);
  }
}
export default withRouter(signup);
