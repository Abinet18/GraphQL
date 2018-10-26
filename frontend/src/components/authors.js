import React, {Component} from 'react';
import {QueryRenderer,graphql} from 'react-relay';
import environment from '../Environment';

import Author  from './author';
import AddAuthor from './addauthor';

const allAuthorsQuery = graphql`
query authorsQuery
{
  authors
  {
    ...author_author
  }
}
`
class authors extends Component {
  render(){
  return (
    <div>
    <QueryRenderer
    environment={environment}
    query={allAuthorsQuery}
    render={({error,props})=>{
      if(error)
      {
        return <div>{error.message}</div>
      }
      else if(props)
      {
        return( <div>
          <p>Authors</p>
          {props.authors.map(author=>(<Author author={author}/>))}
        </div>)
      }
      return null;
    }}
  />
<AddAuthor />
</div>)
  }
}

export default authors;
