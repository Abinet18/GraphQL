import React,{Component} from 'react';
import {QueryRenderer,graphql} from 'react-relay';
import environment from '../Environment';
import UpdateBookMutation from '../mutations/UpdateBookMutation';
const UpdateBookAuthorsQuery = graphql`
query UpdateBookAuthorsQuery
{
  authors
  {
    edges
    {node
    {
      id
      name
    }
  }

  }
}
`

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

      <QueryRenderer
      environment={environment}
      query={UpdateBookAuthorsQuery}
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
            {props.authors.edges.map(({node})=>(<option value={node.id}>{node.name}</option>))}
          </select></span></div>);
        }
        return null;
      }}
    />

      <div><span></span><span><button className="primary" onClick={this.updateBook}>Update</button></span></div>
    </div>
  )
  }

  updateBook= ()=>
  {
    const {title,description,authorid}=this.state;
    UpdateBookMutation({...this.props.book,title:title,description:description,authorid:authorid});
    this.props.onClose();
  }
}

export default UpdateBook;
