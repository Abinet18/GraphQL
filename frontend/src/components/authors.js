import React, {Component} from 'react';
import {QueryRenderer,graphql} from 'react-relay';
import environment from '../Environment';

import AuthorList  from './AuthorList';


const allAuthorsQuery = graphql`
query authorsQuery
{
authorviewer{
  ...AuthorList_viewer
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
        <AuthorList viewer={props.authorviewer}/>
        </div>)
      }
      return null;
    }}
  />
</div>)
  }
}

export default authors;
