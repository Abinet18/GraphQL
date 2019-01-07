import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { createPaginationContainer,graphql } from 'react-relay';
import NewBookSubscription from '../subscriptions/subscriptions';
import AddBook from './addbook';
import Book from './Book';
class BookList extends React.Component
{
  componentDidMount()
  {
    NewBookSubscription()
  }
  render()
  {
    return(
  <InfiniteScroll
      pageStart={0}
      loadMore={this._loadMore}
      hasMore={this.props.relay.hasMore()}
      loader={<div className="loader" key={0}>Loading ...</div>}
  >
    {this.props.viewer.allBooks.edges.map(({node})=>(<Book key={node.id} book={node}/>))}
    <button className="primary" onClick={this._loadMore}>Load More</button>
    <AddBook />
  </InfiniteScroll>
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
  this.props.relay.loadMore(1);
}
}

export default createPaginationContainer(BookList,graphql`
  fragment BookList_viewer on Viewer
  {
    allBooks(first:$count,after:$after,order:"DESC",filter:$filter) @connection(key:"BookList_allBooks",filters:[])
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
    query BookListForwardQuery ($count:Int!,$after:String,$filter:String){
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
      after:paginationInfo.cursor,
      filter:fragmentVariables.filter
    }
  }
}
  )
