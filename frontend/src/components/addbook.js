import React,{Component} from 'react';
import {QueryRenderer,graphql} from 'react-relay';
import environment from '../Environment';
import AddBookMutation from '../mutations/AddBookMutation';
const addbookAuthorsQuery = graphql`
query addbookAuthorsQuery
{
  authors
  {
    id
    name
  }
}
`

class addbook extends Component
{
  state = {
    title:"",
    authorid:"",
    description:""
  };
  render()
  {
    return (
    <div className="bookInput">
      Add New Book
      <div><span>Title</span><span><input type="text" value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})}></input></span></div>
      <div><span>Description</span><span><textarea value={this.state.description} onChange={(e)=>this.setState({description:e.target.value})}></textarea></span></div>

      <QueryRenderer
      environment={environment}
      query={addbookAuthorsQuery}
      render={({error,props})=>{
        if(error)
        {
          return <div>{error.message}</div>
        }
        else if(props)
        {
          console.log(props.authors);
        return(
          <div><span>Author</span><span><select value={this.state.authorid} onChange={(e)=>this.setState({authorid:e.target.value})}>
            {props.authors.map(author=>(<option value={author.id}>{author.name}</option>))}
          </select></span></div>);
        }
        return null;
      }}
    />

      <div><span></span><span><button className="primary" onClick={this.addBook}>Add Book</button></span></div>
    </div>
  )
  }

  addBook= ()=>
  {
    const {title,description,authorid}=this.state;
    AddBookMutation(title,authorid,description);
  }
}

export default addbook;
