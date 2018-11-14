import React,{Component} from 'react';
import {QueryRenderer,graphql} from 'react-relay';
import {fetchQuery} from 'relay-runtime';
import environment from '../Environment';
import AddBookMutation from '../mutations/AddBookMutation';

class addbook extends Component
{
  state = {
    title:"",
    authorid:"",
    description:"",
  };


  render()
  {

    return (
    <div className="bookInput">
      Add New Book
      <div><span>Title</span><span><input type="text" value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})}></input></span></div>
      <div><span>Description</span><span><textarea value={this.state.description} onChange={(e)=>this.setState({description:e.target.value})}>
      </textarea></span></div>
      <div><span>Author</span><span><select value={this.state.authorid}
          onChange={(e)=>this.setState({authorid:e.target.value})}>
            {this.props.authors.map(author=>(<option value={author.id}>{author.name}</option>))}
          </select></span></div>
      <div><span></span><span><button className="primary" onClick={this.addBook}>Add Book</button></span></div>
    </div>
  )
  }

  addBook= ()=>
  {
    const {title,description,authorid}=this.state;
    AddBookMutation(title,authorid,description,this.props.onAddBook);
  }



}

export default addbook;
