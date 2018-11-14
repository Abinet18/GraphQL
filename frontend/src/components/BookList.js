import React from 'react';
import { graphql } from 'react-relay';
import AddBook from './addbook';
import Book from './Book';


class BookList extends React.Component<Props>
{

  render()
  {
    this.props.books.forEach(book=>console.log(book));
    console.log(this.props.books.size);
    console.log(this.props.authors.size);
    const booksToRender=[];
    this.props.books.forEach(book => {
              booksToRender.push(book);
            });

    return (
      <div>
      {booksToRender.map(book=>(<Book book={book}
                                onAddComment={this.props.onAddComment}
                                onUpdateBook={this.props.onAddBook}
                                onDeleteBook={this.props.onDeleteBook}
                                authors={this.props.authors}
                              />))}
      <AddBook onAddBook={this.props.onAddBook} authors={this.props.authors}/>
      </div>
    )

}
}

export default BookList;
