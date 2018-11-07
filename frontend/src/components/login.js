import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import LoginMutation from '../mutations/LoginMutation';
import '../App.css';
class login extends Component {

  state={
    username:"",
    password:""
  };

  render(){
    return <div className="loginInput">
      <div><span>Username</span><span><input type="text" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}></input></span></div>
      <div><span>Password</span><span><input type="password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}></input></span></div>
      <div><span></span><span><button className="primary" onClick={this.login}>Login</button></span></div>
    </div>
  }
  login = ()=>
  {
    const {username,password}=this.state;
    LoginMutation(username,password,this.props.history,this.props.onSuccess);
  }
}
export default withRouter(login);
