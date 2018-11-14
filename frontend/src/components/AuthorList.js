import React from 'react';
import { createFragmentContainer,graphql } from 'react-relay';
import AddAuthor from './addauthor';
import Author from './author';


class AuthorList extends React.Component
{
  render()
  {
    const authors=[];
    this.props.authors.forEach(author=>{
      authors.push(author);
    })
    return(
    <div>
    {authors.map((author,key)=>(<Author key={key} author={author}/>))}
    <AddAuthor />
    </div>
  );
}

}

export default AuthorList;
