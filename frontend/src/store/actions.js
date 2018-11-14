import { graphql,fetchQuery } from 'react-relay';
import environment from '../Environment';
import Immutable from 'immutable';
export const ADD_BOOK = 'ADD_BOOK';
export const ADD_COMMENT='ADD_COMMENT';
export const ADD_AUTHOR = 'ADD_AUTHOR';
export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const UPDATE_BOOK='UPDATE_BOOK';
export const DELETE_BOOK='DELETE_BOOK';
export const DELETE_AUTHOR='DELETE_AUTHOR';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_AUTHORS = 'FETCH_AUTHORS';


export const fetchAuthors= (onFetchAuthors)=>{

  const allAuthorsQuery = graphql`
  query actionsAuthorsQuery
  {
  authorviewer{
    allAuthors(last:100) @connection(key:"AuthorList_allAuthors",filters:[])
    {
      edges
      {
        node
        {
          id
          name
          age
          birthPlace
          books
          {
            title
          }
        }
      }
    }
  }
  }
  `;

  fetchQuery(environment,allAuthorsQuery)
    .then(data => {
      console.log(data);
      let authors=Immutable.OrderedMap();
      data.authorviewer.allAuthors.edges.map(({node})=>
      {
        authors=authors.set(node.id,node);
      })
      onFetchAuthors(authors);
    });

}

export const fetchBooks= (onFetchBooks)=>
{
  const allBooksQuery = graphql`
  query actionsBooksQuery
  {
  viewer{
    allBooks {
      edges
      {
        node
        {
          id
          title
          description
          author{name}
          comments{
            user{
              id
              fullname
            }
            comment
            commentdate
          }

        }
      }
    }
  }
  }
  `;


        fetchQuery(environment,allBooksQuery)
          .then(data => {
            console.log(data);
            let books=Immutable.OrderedMap();
            data.viewer.allBooks.edges.map(({node})=>
            {
              books=books.set(node.id,node);
            })
            onFetchBooks(books);
          });
}
