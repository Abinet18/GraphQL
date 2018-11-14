import React, {Component} from 'react';
import '../App.css';
import {graphql,fetchQuery} from 'react-relay';
import environment from '../Environment';
import BookList from './BookList';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import Immutable from 'immutable';


class BookContainer extends Component {
  componentDidMount()
  {
    console.log("trying to fetch books");
    if(this.props.books.size==0)
    {
      actionTypes.fetchBooks(this.props.onFetchBooks);
      actionTypes.fetchAuthors(this.props.onFetchAuthors);
    }


  }
  render(){
    console.log("books container ",this.props.books);
    return(
      <div>
        <p className="heading">Books</p>
        {this.props.books.size>0?
            <BookList
              books={this.props.books}
              onAddBook={this.props.onAddBook}
              onAddComment={this.props.onAddComment}
              onDeleteBook={this.props.onDeleteBook}
              onUpdateBook = {this.props.onUpdateBook}
              authors={this.props.authors}
            />:
        ''}
    </div>
    )

  }
}

const mapStateToProps = (state)=>
{
  return {
    books:state.books,
    authors:state.authors
  }
}

const mapDispatchToProps = (dispatch)=>
{
  return {
    onAddBook: (book)=>dispatch({type:actionTypes.ADD_BOOK,book:book}),
    onFetchBooks: (books)=>dispatch({type:actionTypes.FETCH_BOOKS,books:books}),
    onFetchAuthors: (authors)=>dispatch({type:actionTypes.FETCH_AUTHORS,authors:authors}),
    onAddComment : (book)=>dispatch({type:actionTypes.UPDATE_BOOK,book:book}),
    onDeleteBook: (bookid)=>dispatch({type:actionTypes.DELETE_BOOK,bookid:bookid}),
    onUpdateBook: (book)=>dispatch({type:actionTypes.UPDATE_BOOK,book:book})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(BookContainer);
