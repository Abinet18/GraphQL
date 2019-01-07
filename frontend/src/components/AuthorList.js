import React from 'react';
import { createFragmentContainer,graphql } from 'react-relay';
import AddAuthor from './addauthor';
import Author from './author';
class AuthorList extends React.Component
{
  render()
  {
    return(
    <div>
    {this.props.viewer.allAuthors.edges.map(({node})=>(<Author key={node.id} author={node}/>))}
    <AddAuthor />
    </div>
  );
}

}

export default createFragmentContainer(AuthorList,graphql`
  fragment AuthorList_viewer on AuthorViewer
  {
    allAuthors(last:100) @connection(key:"AuthorList_allAuthors",filters:[])
    {
      edges
      {
        node
        {
          ...author_author
        }
      }
    }
  }
`)
