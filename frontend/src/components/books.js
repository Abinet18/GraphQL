import React, {Component} from 'react';
import '../App.css';
import {QueryRenderer,graphql} from 'react-relay';
import environment from '../Environment';
import Book from './book';
import AddBook from './addbook';
const allBooksQuery = graphql`
query booksQuery
{
books{
  ...book_book
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
      render={({error,props})=>{
        if(error)
        {
          return <div>{error.message}</div>
        }
        else if(props)
        {
          return(  <div>
              <p>Books</p>
              {props.books.map(book=>(<Book book={book}/>))}

              <AddBook/>

            </div>)
        }
        return null;
      }}
    />)

  }
}
export default books;
