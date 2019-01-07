import React,{Component} from 'react';
import {graphql} from 'react-relay';
import {fetchQuery} from 'relay-runtime';
import environment from '../Environment';
import AddBookMutation from '../mutations/AddBookMutation';
const addbookAuthorsQuery = graphql`
query addbookAuthorsQuery
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

class addbook extends Component
{
  state = {
    title:"",
    authorid:"",
    description:"",
    authors:null,
  };

  componentDidMount()
  {
    this.getAuthors();
  }

  render()
  {
    return (
    <div className="bookInput">
      Add New Book
      <div><span>Title</span><span><input type="text" value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})}></input></span></div>
      <div><span>Description</span><span><textarea value={this.state.description} onChange={(e)=>this.setState({description:e.target.value})}>
      </textarea></span></div>


        {
          (this.state.authors!==null && this.state.authors!==undefined)?  (<div><span>Author</span><span><select value={this.state.authorid}
          onChange={(e)=>this.setState({authorid:e.target.value})}>
            {this.state.authors.edges.map(({node})=>(<option value={node.id}>{node.name}</option>))}
          </select></span></div>):''
        }

    <div><span></span><span><button className="primary" onClick={this.addBook}>Add Book</button></span></div>
    </div>
  )
  }

  addBook= ()=>
  {
    const {title,description,authorid}=this.state;
    AddBookMutation(title,authorid,description);
    this.setState({
      title:"",authorid:null,description:''
    })
  }
  getAuthors=()=>
   {
     console.log("getting authors");
     fetchQuery(environment,addbookAuthorsQuery)
       .then(data => {
         //console.log(data);
         this.setState({authors:data.authors});
       });
   }


}

export default addbook;
