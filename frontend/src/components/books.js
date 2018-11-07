import React, {Component} from 'react';
import '../App.css';
import {QueryRenderer,graphql} from 'react-relay';
import environment from '../Environment';
import BookList from './BookList';

const allBooksQuery = graphql`
query booksQuery($count:Int!,$after:String)
{
viewer{
  ...BookList_viewer
}
}
`
class books extends Component {
  render(){
    // const books=[{title:"First title",description:"This book is on bla bla",
    // author:{name:"Auhtor name"},comments:[{user:{fullname:"Abinet Tafa"},
    // comment:"Great book",commentdate:"Oct 24 2018"}]}];
    return(
    <QueryRenderer
      environment={environment}
      query={allBooksQuery}
        variables={{count:3}}
      render={({error,props})=>{
        if(error)
        {
          return <div>{error.message}</div>
        }
        else if(props)
        {
          return(
            <div>
              <p className="heading">Books</p>
              <BookList viewer={props.viewer}/>
            </div>)
        }
        return null;
      }}
    />)

  }
}
export default books;
