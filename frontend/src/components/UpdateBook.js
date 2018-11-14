import React,{Component} from 'react';
import {QueryRenderer,graphql} from 'react-relay';
import environment from '../Environment';
import UpdateBookMutation from '../mutations/UpdateBookMutation';


class UpdateBook extends Component
{

  state = {
    title:this.props.book.title,
    authorid:this.props.book.author && this.props.book.author.id ? this.props.book.author.id:'',
    description:this.props.book.description
  };
  render()
  {

    return (
    <div className="bookInput">
      Update Book
      <div><span>Title</span><span><input type="text" value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})}></input></span></div>
      <div><span>Description</span><span><textarea value={this.state.description} onChange={(e)=>this.setState({description:e.target.value})}></textarea></span></div>
      <div><span>Author</span><span>
        <select value={this.state.authorid} onChange={(e)=>this.setState({authorid:e.target.value})}>
            {this.props.authors.map(author=>(<option value={author.id}>{author.name}</option>))}
        </select></span></div>
      <div><span></span><span><button className="primary" onClick={this.updateBook}>Update</button></span></div>
    </div>
  )
  }

  updateBook= ()=>
  {
    const {title,description,authorid}=this.state;
    UpdateBookMutation({...this.props.book,title:title,description:description,authorid:authorid},this.props.onUpdateBook);
    this.props.onClose();
  }
}

export default UpdateBook;
