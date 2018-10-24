import React, {Component} from 'react';
import '../App.css';
class books extends Component {
  render(){
    const books=[{title:"First title",description:"This book is on bla bla",
    author:{name:"Auhtor name"},comments:[{user:{fullname:"Abinet Tafa"},
    comment:"Great book",commentdate:"Oct 24 2018"}]}];
    return <div>
      <p>Books</p>
      {books.map(book=>(<div className="bookCard">
        <p><strong>{book.title}</strong></p>
        <p>{book.description}</p>
        {book.comments.map(comment=>(
          <div class="commentCard"><em>{comment.user.fullname} {comment.comment} {comment.commentdate}</em></div>
        ))}
        <div class="commentCard"><input className="commentInput" type="text"/><button className="primary">comment</button></div>
      </div>))}

      <div className="bookInput">
        <div><span>Title</span><span><input type="text"s value=""></input></span></div>
        <div><span>Description</span><span><textarea ></textarea></span></div>
        <div><span>author</span><span><select ><option>Abinet</option></select></span></div>
        <div><span></span><span><button className="primary">Add Book</button></span></div>
      </div>

    </div>
  }
}
export default books;
