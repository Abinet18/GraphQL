import React from 'react';
import { createPaginationContainer,graphql } from 'react-relay';
import AddBook from './addbook';
import Book from './Book';
class BookList extends React.Component
{
  render()
  {
    return(
    <div>
    {this.props.viewer.allBooks.edges.map(({node})=>(<Book book={node}/>))}
    <button className="primary" onClick={this._loadMore}>Load More</button>
    <AddBook />
    </div>
  );
}
_loadMore=()=>{
  if(!this.props.relay.hasMore()){
    console.log("Nothing more to load");
    return;
  }else if(this.props.relay.isLoading()){
    console.log("Request is already pending");
    return;
  }
  this.props.relay.loadMore(3);
}
}

export default createPaginationContainer(BookList,graphql`
  fragment BookList_viewer on Viewer
  {
    allBooks(first:$count,after:$after,order:"DESC") @connection(key:"BookList_allBooks",filters:[])
    {
      edges
      {
        node
        {
          ...Book_book
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`,
{
  direction:"forward",
  query: graphql`
    query BookListForwardQuery ($count:Int!,$after:String){
      viewer{
        ...BookList_viewer
      }
    }
  `,
  getConnectionFromProps(props){
    return props.viewer && props.viewer.allBooks;
  },
  getFragmentVariables(previousVariables,totalCount)
  {
    return {
      ...previousVariables,
      count:totalCount
    };
  },
  getVariables(props,paginationInfo,fragmentVariables){
    return {
      count:paginationInfo.count,
      after:paginationInfo.cursor
    }
  }
}
  )
