import React from 'react';
import AddAuthorMutation from '../mutations/AddAuthorMutation';

class addauthor extends React.Component
{
  state = {
    name:"",
    age:0,
    birthPlace:""
  };
render()
{
  return (
    <div className="authorInput">
    Add New Author
    <div><span>Full name</span><span><input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}></input></span></div>
    <div><span>Age</span><span><input type="text" value={this.state.age} onChange={(e)=>this.setState({age:e.target.value})}></input></span></div>
    <div><span>birthPlace</span><span><input type="text" value={this.state.birthPlace} onChange={(e)=>this.setState({birthPlace:e.target.value})}></input></span></div>
    <div><span></span><span><button className="primary" onClick={this.submit}>Add Author</button></span></div>
  </div>);
}
submit=()=>
{
  console.log(this.state);
  const {name,age,birthPlace}=this.state;
  AddAuthorMutation(name,age,birthPlace);
}
}


export default addauthor;
